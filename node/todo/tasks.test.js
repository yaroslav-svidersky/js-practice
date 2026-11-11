const { describe, test } = require("node:test");
const assert = require("node:assert/strict");
const { addTask } = require("./tasks.js");

describe("addTask", () => {
  test("adds a task to an empty list", () => {
    assert.equal(addTask([], "Buy milk")[0].id, 1);
  });

  test("uses max id + 1", () => {
    assert.equal(addTask([{ id: 1 }, { id: 5 }], "Buy eggs")[2].id, 6);
  });

  test("does not mutate the original array", () => {
    const tasks = [{}, {}];
    addTask(tasks, "Buy bread");
    assert.equal(tasks.length, 2);
  });

  test("trims the title", () => {
    assert.equal(addTask([], " Buy cigarettes ")[0].title, "Buy cigarettes");
  });

  test("throws TypeError for an empty title", () => {
    assert.throws(() => addTask([], ""), TypeError);
    assert.throws(() => addTask([], "   "), TypeError);
  });

  test("throws TypeError for a non-string title", () => {
    assert.throws(() => addTask([], 42), TypeError);
  });
});
