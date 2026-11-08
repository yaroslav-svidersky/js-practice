const files = {
  "a.txt": "Hello from A",
  "b.txt": "Hello from B",
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

fakeReadFile("a.txt", callback);
fakeReadFile("missing.txt", callback);
console.log("end");
// end
// Hello from A
// File not found: missing.txt
