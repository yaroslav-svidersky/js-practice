import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { Emitter } from "./emitter.mjs";

describe("Emitter", () => {
  test("emit subscribes a listener to an event", () => {
    const emitter = new Emitter();
    const calls = [];
    const fn = (name) => calls.push(name);
    emitter.on("greet", fn);

    assert.deepEqual(emitter.events, [["greet", fn]]);
  });

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
});
