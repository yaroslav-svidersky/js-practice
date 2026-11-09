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
  const start = Date.now();
  try {
    const a = await readFilePromise(first);
    const b = await readFilePromise(second);
    const c = await readFilePromise(third);
    console.log(`sequential (${Date.now() - start}): ${a} | ${b} | ${c}`);
  } catch (err) {
    console.log(`sequential (${Date.now() - start}): ` + err.message);
  }
}

async function readAllParallel(first, second, third) {
  const start = Date.now();
  try {
    const [a, b, c] = await Promise.all([
      readFilePromise(first),
      readFilePromise(second),
      readFilePromise(third),
    ]);
    console.log(`parallel (${Date.now() - start}): ${a} | ${b} | ${c}`);
  } catch (err) {
    console.log(`parallel (${Date.now() - start}): ` + err.message);
  }
}

readAll("a.txt", "b.txt", "c.txt"); // ~300 ms
readAll("a.txt", "missing.txt", "c.txt"); // ~200 ms

readAllParallel("a.txt", "b.txt", "c.txt"); // ~100 ms
readAllParallel("a.txt", "missing.txt", "c.txt"); // ~100 ms
