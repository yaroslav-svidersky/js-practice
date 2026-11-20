import { createServer } from "node:http";

const tasks = [
  { id: 1, title: "Buy bread", done: false },
  { id: 2, title: "Learn HTTP", done: true },
];

const server = createServer((req, res) => {
  console.log(req.method, req.url);

  const url = new URL(req.url, "http://localhost");
  if (req.method === "GET" && url.pathname === "/tasks") {
    const done = url.searchParams.get("done");
    if (done !== "true" && done !== "false" && done !== null) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end("done must be true or false\n");
      return;
    }
    const selectedTasks =
      done === null
        ? tasks
        : tasks.filter((task) => task.done === (done === "true"));
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(selectedTasks));
    return;
  }

  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("Not found\n");
});

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
