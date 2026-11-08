const files = {
  "a.txt": "Hello from A",
  "b.txt": "Hello from B",
  "c.txt": "Hello from C",
};

function callback(error, content) {
  if (error === null) {
    console.log(content);
    return undefined;
  }
  console.log(error.message);
}

function fakeReadFile(name, callback) {
  if (files[name] !== undefined) {
    setTimeout(() => callback(null, files[name]), 100);
  } else {
    setTimeout(() => callback(new Error("File not found: " + name)), 100);
  }
}

fakeReadFile("a.txt", (err, a) => {
  if (err) {
    console.log(err.message);
    return;
  }
  fakeReadFile("b.txt", (err, b) => {
    if (err) {
      console.log(err.message);
      return;
    }
    fakeReadFile("c.txt", (err, c) => {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log(`${a} | ${b} | ${c}`);
    });
  });
});

console.log("end");
// end
// Hello from A | Hello from B | Hello from C
