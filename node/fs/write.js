const fs = require("node:fs/promises");
const path = require("node:path");

async function main() {
  const dir = path.join(__dirname, "output");
  await fs.mkdir(dir, { recursive: true });

  const file = path.join(dir, "hello.txt");
  await fs.writeFile(file, "first\n");
  await fs.writeFile(file, "second\n");
  await fs.appendFile(file, "third\n");

  console.log(await fs.readdir(dir));
  console.log(await fs.readFile(file, "utf8"));
}

main();
