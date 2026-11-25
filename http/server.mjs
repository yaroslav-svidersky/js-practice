import { createServer } from "node:http";

class HttpError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = "HttpError";
    this.statusCode = statusCode;
  }
}

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

async function handleRequest(req, res) {
  console.log(req.method, req.url);

  const url = new URL(req.url, "http://localhost");
  if (req.method === "GET" && url.pathname === "/tasks") {
    const done = url.searchParams.get("done");
    if (done !== "true" && done !== "false" && done !== null) {
      throw new HttpError(400, "done must be true or false");
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
      throw new HttpError(400, "id must be a positive integer");
    }
    const taskByID = tasks.find((task) => task.id === id);
    if (taskByID === undefined) {
      throw new HttpError(404, "Task not found");
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
      throw new HttpError(400, "body must be valid JSON");
    }

    if (typeof data !== "object" || data === null || Array.isArray(data)) {
      throw new HttpError(400, "body must be a JSON object");
    }
    const title = typeof data.title === "string" ? data.title.trim() : "";
    if (title === "") {
      throw new HttpError(400, "title must be a non-empty string");
    }
    const highestID =
      tasks.length === 0 ? 0 : Math.max(...tasks.map((task) => task.id));
    const newTask = { id: highestID + 1, title: title, done: false };
    tasks.push(newTask);
    sendJson(res, 201, newTask);
    return;
  }

  if (url.pathname === "/tasks") {
    res.setHeader("Allow", "GET, POST");
    sendText(res, 405, "Method not allowed");
    return;
  }
  if (parts.length === 3 && parts[1] === "tasks") {
    res.setHeader("Allow", "GET");
    sendText(res, 405, "Method not allowed");
    return;
  }

  throw new HttpError(404, "Not found");
}

const server = createServer(async (req, res) => {
  try {
    await handleRequest(req, res);
  } catch (err) {
    if (res.headersSent) {
      console.error(err);
      return;
    }
    if (err instanceof HttpError) {
      sendText(res, err.statusCode, err.message);
      return;
    }
    console.error(err);
    sendText(res, 500, "Internal server error");
  }
});

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
