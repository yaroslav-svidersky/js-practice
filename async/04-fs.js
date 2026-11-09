const fs = require("node:fs/promises");
const path = require("node:path");

async function readAll(first, second, third) {
  try {
    const [filePathA, filePathB, filePathC] = [
      path.join(__dirname, "data", first),
      path.join(__dirname, "data", second),
      path.join(__dirname, "data", third),
    ];
    const [textA, textB, textC] = await Promise.all([
      await fs.readFile(filePathA, "utf8"),
      await fs.readFile(filePathB, "utf8"),
      await fs.readFile(filePathC, "utf8"),
    ]);
    console.log(`${textA}, ${textB} - ${textC}!`);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(`File not found: ${err.path}`);
    } else {
      console.log(err.message);
    }
  }
}

readAll("a.txt", "b.txt", "c.txt");
readAll("a.txt", "missing.txt", "c.txt");
