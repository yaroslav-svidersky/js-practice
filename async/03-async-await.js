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

async function readAll(first, second, third) {
  try {
    const a = await readFilePromise(first);
    const b = await readFilePromise(second);
    const c = await readFilePromise(third);
    console.log(`${a} | ${b} | ${c}`);
  } catch (err) {
    console.log(err.message);
  }
}

readAll("a.txt", "b.txt", "c.txt");
readAll("a.txt", "missing.txt", "c.txt");
