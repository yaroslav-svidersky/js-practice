const files = {
  "a.txt": "Hello from A",
  "b.txt": "Hello from B",
  "c.txt": "Hello from C",
};

function readFilePromise(name) {
  return new Promise((resolve, reject) => {
    if (files[name] !== undefined) {
      setTimeout(() => resolve(files[name]), 100);
    } else {
      setTimeout(() => reject(new Error("File not found: " + name)), 100);
    }
  });
}

const p1 = readFilePromise("a.txt");
const p2 = readFilePromise("missing.txt");
p1.then((value) => console.log(value)).catch((err) => console.log(err.message));
p2.then((value) => console.log(value)).catch((err) => console.log(err.message));
