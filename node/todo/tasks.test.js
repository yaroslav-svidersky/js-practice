const { describe, test } = require("node:test");
const assert = require("node:assert/strict");
const { addTask, completeTask, formatTasks } = require("./tasks.js");

describe("addTask", () => {
  test("adds a task to an empty list", () => {
    assert.equal(addTask([], "Buy milk")[0].id, 1);
  });

  test("uses max id + 1", () => {
    assert.equal(addTask([{ id: 1 }, { id: 5 }], "Buy eggs")[2].id, 6);
  });

  test("uses max id + 1 when ids are not sorted", () => {
    assert.equal(addTask([{ id: 5 }, { id: 1 }], "Buy eggs")[2].id, 6);
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

describe("completeTask", () => {
  test("marks the task as done", () => {
    const markedTasks = completeTask(
      [
        { id: 5, title: "Buy bread", done: false },
        { id: 4, title: "Buy eggs", done: false },
      ],
      5,
    );
    assert.equal(markedTasks[0].done, true);
  });

  test("does not change other tasks", () => {
    const markedTasks = completeTask(
      [
        { id: 5, title: "Buy bread", done: false },
        { id: 4, title: "Buy eggs", done: false },
      ],
      5,
    );
    assert.equal(markedTasks[1].done, false);
  });

  test("does not mutate the original task", () => {
    const originalTasks = [
      { id: 5, title: "Buy bread", done: false },
      { id: 4, title: "Buy eggs", done: false },
    ];
    completeTask(originalTasks, 5);
    assert.equal(originalTasks[0].done, false);
  });

  test("throws RangeError for an unknown id", () => {
    const tasks = [{ id: 3, title: "Buy bread", done: false }];
    assert.throws(() => completeTask(tasks, 5), RangeError);
  });
});

describe("formatTasks", () => {
  test("formats an undone task", () => {
    assert.equal(
      formatTasks([{ id: 1, title: "Buy salt", done: false }]),
      "[ ] 1. Buy salt",
    );
  });

  test("formats a done task", () => {
    assert.equal(
      formatTasks([{ id: 2, title: "Take out the trash", done: true }]),
      "[x] 2. Take out the trash",
    );
  });

  test("uses task id, not position", () => {
    assert.equal(
      formatTasks([
        { id: 5, title: "Take out the trash", done: true },
        { id: 2, title: "Buy salt", done: false },
      ]),
      `[x] 5. Take out the trash\n[ ] 2. Buy salt`,
    );
  });

  test("joins tasks with newlines", () => {
    assert.equal(
      formatTasks([
        { id: 2, title: "Buy salt", done: false },
        { id: 5, title: "Take out the trash", done: true },
      ]),
      "[ ] 2. Buy salt\n[x] 5. Take out the trash",
    );
  });

  test('returns "No tasks" for an empty list', () => {
    assert.equal(formatTasks([]), "No tasks");
  });
});
