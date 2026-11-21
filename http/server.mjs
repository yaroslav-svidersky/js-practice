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

const server = createServer((req, res) => {
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

  sendText(res, 404, "Not found");
});

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
