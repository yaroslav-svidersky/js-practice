function addTask(tasks, title) {
  const highestID =
    tasks.length === 0 ? 0 : Math.max(...tasks.map((elem) => elem.id));
  if (typeof title === "string" && title.trim() !== "") {
    return [...tasks, { id: highestID + 1, title: title.trim(), done: false }];
  }
  throw new TypeError("Title must be a non-empty string");
}

function completeTask(tasks, id) {
  const completeTaskIndex = tasks.findIndex((task) => task.id === id);
  if (completeTaskIndex !== -1) {
    const newList = [...tasks];
    newList[completeTaskIndex] = {
      id: id,
      title: tasks[completeTaskIndex].title,
      done: true,
    };
    return newList;
  }
  throw new RangeError(`Task ${id} not found`);
}

module.exports = { addTask, completeTask };
