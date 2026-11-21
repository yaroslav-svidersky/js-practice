import { createServer } from "node:http";

const tasks = [
  { id: 1, title: "Buy bread", done: false },
  { id: 2, title: "Learn HTTP", done: true },
];

function sendJson(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(data) + "\n");
}

function sendText(res, statusCode, text) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end(text + "\n");
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

const server = createServer(async (req, res) => {
  console.log(req.method, req.url);

  const url = new URL(req.url, "http://localhost");
  if (req.method === "GET" && url.pathname === "/tasks") {
    const done = url.searchParams.get("done");
    if (done !== "true" && done !== "false" && done !== null) {
      sendText(res, 400, "done must be true or false");
      return;
    }
    const selectedTasks =
      done === null
        ? tasks
        : tasks.filter((task) => task.done === (done === "true"));
    sendJson(res, 200, selectedTasks);
    return;
  }
  const parts = url.pathname.split("/");
  if (req.method === "GET" && parts.length === 3 && parts[1] === "tasks") {
    const id = Number(parts[2]);
    if (!Number.isInteger(id) || id < 1) {
      sendText(res, 400, "id must be a positive integer");
      return;
    }
    const taskByID = tasks.find((task) => task.id === id);
    if (taskByID === undefined) {
      sendText(res, 404, "Task not found");
      return;
    }
    sendJson(res, 200, taskByID);
    return;
  }
  if (req.method === "POST" && url.pathname === "/tasks") {
    const text = await readBody(req);
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      sendText(res, 400, "body must be valid JSON");
      return;
    }

    if (
      data === null ||
      Array.isArray(data) ||
      typeof data === "number" ||
      typeof data === "string"
    ) {
      sendText(res, 400, "body must be a JSON object");
      return;
    }
    const title =
      data.title !== undefined && typeof data.title === "string"
        ? data.title.trim()
        : "";
    if (title === "") {
      sendText(res, 400, "title must be a non-empty string");
      return;
    }
    const highestID =
      tasks.length === 0 ? 0 : Math.max(...tasks.map((elem) => elem.id));
    tasks.push({ id: highestID + 1, title: title.trim(), done: false });
    sendJson(res, 201, tasks.at(-1));
    return;
  }

  sendText(res, 404, "Not found");
});

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
