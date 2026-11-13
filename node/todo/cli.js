const { addTask, completeTask, formatTasks } = require("./tasks.js");
const { loadTasks, saveTasks } = require("./storage.js");
const path = require("node:path");

const filePath =
  process.env.TODO_FILE ?? path.join(__dirname, "output", "tasks.json");

async function main() {
  try {
    const [command, ...args] = process.argv.slice(2);
    if (command === "list") {
      const tasks = await loadTasks(filePath);
      console.log(formatTasks(tasks));
    } else if (command === "add") {
      const title = args[0];
      const tasks = addTask(await loadTasks(filePath), title);
      await saveTasks(filePath, tasks);
      console.log(`Added task ${tasks.at(-1).id}`);
    } else if (command === "done") {
      const id = Number(args[0]);
      if (!Number.isInteger(id)) {
        throw new TypeError(`Invalid id: ${args[0]}`);
      }
      const tasks = completeTask(await loadTasks(filePath), id);
      await saveTasks(filePath, tasks);
      console.log(`Completed task ${id}`);
    } else {
      if (command !== undefined) {
        throw new Error(`Unknown command: ${command}`);
      } else {
        throw new Error("Command argument missing");
      }
    }
  } catch (err) {
    console.error(err.message);
    process.exitCode = 1;
  }
}

main();
