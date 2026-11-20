import { createServer } from "node:http";

const tasks = [
  { id: 1, title: "Buy bread", done: false },
  { id: 2, title: "Learn HTTP", done: true },
];

const server = createServer((req, res) => {
  console.log(req.method, req.url);

  const url = new URL(req.url, "http://localhost");
  if (req.method === "GET" && url.pathname === "/tasks") {
    if (url.searchParams.get("done") === null) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify(tasks));
    } else if (url.searchParams.get("done") === "true") {
      const doneTasks = tasks.filter((task) => task.done === true);
      res.end(JSON.stringify(doneTasks));
    } else if (url.searchParams.get("done") === "false") {
      const doneTasks = tasks.filter((task) => task.done === false);
      res.end(JSON.stringify(doneTasks));
    } else {
      res.statusCode = 400;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end("done must be true or false\n");
    }
    return;
  }

  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("Not found\n");
});

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
