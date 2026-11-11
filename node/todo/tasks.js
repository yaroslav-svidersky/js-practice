function addTask(tasks, title) {
  const highestID =
    tasks.length === 0 ? 0 : Math.max(...tasks.map((elem) => elem.id));
  if (typeof title === "string" && title.trim() !== "") {
    return [...tasks, { id: highestID + 1, title: title.trim(), done: false }];
  }
  throw new TypeError("Title must be a non-empty string");
}

module.exports = { addTask };
