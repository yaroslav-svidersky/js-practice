import { createServer } from "node:http";

const tasks = [
  { id: 1, title: "Buy bread", done: false },
  { id: 2, title: "Learn HTTP", done: true },
];

const server = createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.method === "GET" && req.url === "/tasks") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(tasks));
    return;
  }

  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("Not found\n");
});

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
