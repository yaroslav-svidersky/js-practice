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
