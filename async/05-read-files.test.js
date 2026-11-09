const { describe, test } = require("node:test");
const assert = require("node:assert/strict");
const { readFiles } = require("./05-read-files.js");

describe("readFiles", () => {
  test("readFiles returns file contents in the same order", async () => {
    const result = await readFiles(["c.txt", "a.txt"]);
    assert.deepEqual(result, ["и до науки", "Сначала Аз"]);
  });

  test("readFiles returns an empty array for no names", async () => {
    const result = await readFiles([]);
    assert.deepEqual(result, []);
  });

  test("readFiles rejects with ENOENT for a missing file", async () => {
    await assert.rejects(() => readFiles(["missing.txt"]), { code: "ENOENT" });
  });
});
