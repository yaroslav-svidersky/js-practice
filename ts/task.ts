type Task = {
  id: number;
  title: string;
  done: boolean;
};

const a: Task = { id: 1, title: "Buy bread", done: false };
const b: Task = { id: 2, title: "Buy eggs", done: true };
const c: Task = { id: 3, title: "Buy milk", done: false };
const d: Task = { id: 4, title: "Buy tea", done: true };

console.log(a.title);
a.done = true;

function titles(tasks: Task[]) {
  return tasks.map((task) => task.title);
}

const result: string[] = titles([a, b, c, d]);
