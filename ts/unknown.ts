type Task = {
  id: number;
  title: string;
  done: boolean;
};

function parseTask(data: unknown): Task {
  if (typeof data !== "object" || data === null) {
    throw new TypeError("Task must be an object");
  }
  if (!("id" in data) || typeof data.id !== "number") {
    throw new TypeError("Task id must be a number");
  }
  if (
    !("title" in data) ||
    typeof data.title !== "string" ||
    data.title.trim() === ""
  ) {
    throw new TypeError("Task title must be a non-empty string");
  }
  if (!("done" in data) || typeof data.done !== "boolean") {
    throw new TypeError("Task status(done property) must be a boolean value");
  }
  return { id: data.id, title: data.title, done: data.done };
}

console.log(
  parseTask(JSON.parse('{"id": 1, "title": "Buy bread", "done": false}')),
);
