function addTask(tasks, title) {
  if (typeof title !== "string" || title.trim() === "") {
    throw new TypeError("Title must be a non-empty string");
  }
  const highestID =
    tasks.length === 0 ? 0 : Math.max(...tasks.map((elem) => elem.id));
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

function formatTasks(tasks) {
  if (tasks.length > 0) {
    const listTitles = tasks
      .map(
        (task, index) =>
          `${tasks[index].done === false ? "[ ]" : "[X]"} ${index + 1}. ${task.title}`,
      )
      .join("\n");
    return listTitles;
  }
  return "No tasks";
}

module.exports = { addTask, completeTask, formatTasks };
