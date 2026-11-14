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

function completeTask(tasks: Task[], id: number): Task[] {
  const completeTaskIndex = tasks.findIndex((task) => task.id === id);
  if (completeTaskIndex === -1) {
    throw new RangeError(`Task ${id} not found`);
  }
  const newList = [...tasks];
  newList[completeTaskIndex] = { ...tasks[completeTaskIndex], done: true };
  return newList;
}

const newTasks = completeTask([a, b, c, d], 3);
console.log(newTasks);

function getTitle(tasks: Task[], id: number): string {
  const task = tasks.find((task) => task.id === id);
  if (task === undefined) {
    throw new RangeError(`Task ${id} not found`);
  }
  return task.title;
}

console.log(getTitle([a, b], 2));
