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
const abc = [];
readFilePromise("a.txt")
  .then((a) => {
    abc.push(a);
    return readFilePromise("b.txt");
  })
  .then((b) => {
    abc.push(b);
    return readFilePromise("c.txt");
  })
  .then((c) => {
    abc.push(c);
    console.log(`${abc[0]} | ${abc[1]} | ${abc[2]}`);
  })
  .catch((err) => console.log(err.message));

const abc2 = [];
readFilePromise("a.txt")
  .then((a) => {
    abc2.push(a);
    return readFilePromise("missing.txt");
  })
  .then((b) => {
    abc2.push(b);
    return readFilePromise("c.txt");
  })
  .then((c) => {
    abc2.push(c);
    console.log(`${abc2[0]} | ${abc2[1]} | ${abc2[2]}`);
  })
  .catch((err) => console.log(err.message));
