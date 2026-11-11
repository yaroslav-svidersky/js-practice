function addTask(tasks, title) {
  const lastTask = tasks.length === 0 ? undefined : tasks[tasks.length - 1];
  const highestID = lastTask === undefined ? 0 : lastTask.id;
  if (typeof title === "string" && title.trim() !== "") {
    return [...tasks, { id: highestID + 1, title: title.trim(), done: false }];
  }
  throw new TypeError("Title must be a non-empty string");
}

module.exports = { addTask };
