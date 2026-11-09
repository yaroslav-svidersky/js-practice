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
      reject(new Error("File not found: " + name));
    }
  });
}

const p = readFilePromise("a.txt");
p.then((value) => console.log(value)).catch((err) => console.log(err.message));
