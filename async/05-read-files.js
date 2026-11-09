const fs = require("node:fs/promises");
const path = require("node:path");

async function readFiles(names) {
  const values = names.map((name) =>
    fs.readFile(path.join(__dirname, "data", name), "utf8"),
  );
  return Promise.all(values);
}

module.exports = { readFiles };
