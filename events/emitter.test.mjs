import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { Emitter } from "./emitter.mjs";

describe("Emitter", () => {
  test("emit calls a listener with the arguments", () => {
    const emitter = new Emitter();
    const calls = [];
    emitter.on("greet", (name) => calls.push(name));

    emitter.emit("greet", "Marcus");

    assert.deepEqual(calls, ["Marcus"]);
  });

  test("emit calls listeners in recording order", () => {
    const emitter = new Emitter();
    const calls = [];
    emitter.on("greet", (name) => calls.push(name + "1"));
    emitter.on("greet", (name) => calls.push(name + "2"));
    emitter.on("greet", (name) => calls.push(name + "3"));

    emitter.emit("greet", "Marcus");

    assert.deepEqual(calls, ["Marcus1", "Marcus2", "Marcus3"]);
  });

  test("emit returns true if there were listeners", () => {
    const emitter = new Emitter();
    const calls = [];
    emitter.on("greet", (name) => calls.push(name));

    const whatEmitReturned = emitter.emit("greet", "Marcus");

    assert.equal(whatEmitReturned, true);
  });

  test("emit returns false if there were no listeners", () => {
    const emitter = new Emitter();

    const whatEmitReturned = emitter.emit("greet", "Marcus");

    assert.equal(whatEmitReturned, false);
  });

  test("emit does not call listeners of other events", () => {
    const emitter = new Emitter();
    const calls = [];
    emitter.on("greet", (name) => calls.push(name));
    emitter.on("bye", (name) => calls.push("bye " + name));

    emitter.emit("bye", "Marcus");

    assert.deepEqual(calls, ["bye Marcus"]);
  });

  test("emit passes all arguments to the listeners", () => {
    const emitter = new Emitter();
    const calls = [];
    emitter.on("greet", (name, greeting, exclamation) =>
      calls.push(`${greeting}, ${name}${exclamation}`),
    );

    emitter.emit("greet", "Marcus", "Hello", "!");

    assert.deepEqual(calls, ["Hello, Marcus!"]);
  });

  test("emit names from 'Object.prototype' work just like regular ones", () => {
    const emitter = new Emitter();
    const calls = [];

    const whatEmitReturned = emitter.emit("toString", "Marcus");
    emitter.on("toString", (name) => calls.push(name));
    emitter.emit("toString", "Marcus");

    assert.equal(whatEmitReturned, false);
    assert.deepEqual(calls, ["Marcus"]);
  });
});
