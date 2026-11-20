import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log(req.method, req.url);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("Hello from Node\n");
});

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
