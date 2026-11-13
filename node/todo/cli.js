const { addTask, formatTasks } = require("./tasks.js");
const { loadTasks, saveTasks } = require("./storage.js");
const path = require("node:path");

const envTodoFile = process.env.TODO_FILE;
const filePath =
  envTodoFile !== undefined
    ? envTodoFile
    : path.join(__dirname, "output", "tasks.json");

async function main() {
  const [command, ...args] = process.argv.slice(2);
  if (command === "add") {
    const title = args[0];
    const tasks = addTask(await loadTasks(filePath), title);
    await saveTasks(filePath, tasks);
    console.log(`Added task ${tasks.at(-1).id}`);
  } else if (command === "list") {
    const tasks = await loadTasks(filePath);
    console.log(formatTasks(tasks));
  } else {
    if (command !== undefined) {
      console.error(`Unknown command: ${command}`);
      process.exitCode = 1;
    } else {
      console.error("Command argument missing");
      process.exitCode = 1;
    }
  }
}

main();
