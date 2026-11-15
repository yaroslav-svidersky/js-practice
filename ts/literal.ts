type Command = "add" | "list" | "done" | "remove";

type Task = {
  id: number;
  title: string;
  done: boolean;
  note?: string;
};

function parseCommand(input: string): Command {
  if (
    input === "add" ||
    input === "list" ||
    input === "done" ||
    input === "remove"
  ) {
    return input;
  }
  throw new TypeError(`Unknown command: ${input}`);
}

const task: Task = { id: 1, title: "Buy bread", done: false };
if (task.note !== undefined) console.log(task.note.length);

let command: Command = "add";

command = "list";

const input: string = "done";
command = parseCommand(input);
console.log(command);

const descriptions: Record<Command, string> = {
  add: "Add a new task",
  list: "Show all tasks",
  done: "Mark a task as done",
  remove: "Delete the task by ID",
};

function describeCommand(command: Command): string {
  return descriptions[command];
}

console.log(describeCommand("list"));
