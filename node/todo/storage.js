const fs = require("node:fs/promises");
const path = require("node:path");

async function loadTasks(filePath) {
  let text;
  try {
    text = await fs.readFile(filePath, "utf8");
  } catch (err) {
    if (err.code === "ENOENT") {
      return [];
    }
    throw err;
  }
  const tasks = JSON.parse(text);
  if (!Array.isArray(tasks)) {
    throw new TypeError(`Invalid tasks file: ${filePath}`);
  }
  return tasks;
}

async function saveTasks(filePath, tasks) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
}

// console.log(
//   saveTasks("/home/yara/projects/js-practice/node/todo/output/tasks.json", [
//     { id: 5, title: "Buy bread", done: false },
//   ]),
// );

// loadTasks("/home/yara/projects/js-practice/node/todo/output/tasks.json").then(
//   (a) => console.log(a),
// );

module.exports = { loadTasks, saveTasks };
