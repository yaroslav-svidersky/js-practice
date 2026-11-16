type Command = "add" | "list" | "done" | "remove";

type Task = {
  id: number;
  title: string;
  done: boolean;
  note?: string;
};

const task: Task = { id: 1, title: "Buy bread", done: false };
if (task.note !== undefined) console.log(task.note.length);

let command: Command = "add";

command = "list";

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

console.log(Object.keys(descriptions));
console.log(Object.values(descriptions).length);
console.log(Object.entries(descriptions)[0]);

function formatHelp(): string {
  return Object.entries(descriptions)
    .map(([command, text]) => `${command} - ${text}`)
    .join("\n");
}

console.log(formatHelp());

function isCommand(input: string): input is Command {
  return Object.keys(descriptions).includes(input);
}

function parseCommand(input: string): Command {
  if (isCommand(input)) {
    return input;
  }
  throw new TypeError(`Unknown command: ${input}`);
}

const input: string = "done";
command = parseCommand(input);
console.log(command);
