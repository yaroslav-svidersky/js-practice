function addTask(tasks, title) {
  const highestID =
    tasks.length === 0 ? 0 : Math.max(...tasks.map((elem) => elem.id));
  if (typeof title !== "string" || title.trim() === "") {
    throw new TypeError("Title must be a non-empty string");
  }
  return [...tasks, { id: highestID + 1, title: title.trim(), done: false }];
}

function completeTask(tasks, id) {
  const completeTaskIndex = tasks.findIndex((task) => task.id === id);
  if (completeTaskIndex === -1) {
    throw new RangeError(`Task ${id} not found`);
  }
  const newList = [...tasks];
  newList[completeTaskIndex] = { ...tasks[completeTaskIndex], done: true };
  return newList;
}

module.exports = { addTask, completeTask };
