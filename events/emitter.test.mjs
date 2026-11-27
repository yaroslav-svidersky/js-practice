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

  test("after off, the listener is not called", () => {
    const emitter = new Emitter();
    const calls = [];
    const fn = (name) => calls.push(name);

    emitter.on("greet", fn);
    emitter.off("greet", fn);
    emitter.emit("greet", "Marcus");

    assert.deepEqual(calls, []);
  });

  test("after the only listener is off, emit returns false", () => {
    const emitter = new Emitter();
    const calls = [];
    const fn = (name) => calls.push(name);

    emitter.on("greet", fn);
    emitter.off("greet", fn);

    const whatEmitReturned = emitter.emit("greet", "Marcus");

    assert.equal(whatEmitReturned, false);
  });

  test("off of a function that is not subscribed does not change anything", () => {
    const emitter = new Emitter();
    const calls = [];
    const fn = (name) => calls.push(name);
    const other = (name) => calls.push(name + "1");

    emitter.on("greet", fn);
    emitter.off("greet", other);
    emitter.emit("greet", "Marcus");

    assert.deepEqual(calls, ["Marcus"]);
  });

  test("two listeners are subscribed, off removes only the first one", () => {
    const emitter = new Emitter();
    const calls = [];
    const fn = (name) => calls.push(name);
    const fn1 = (name) => calls.push(name + "1");

    emitter.on("greet", fn);
    emitter.on("greet", fn1);
    emitter.off("greet", fn);
    emitter.emit("greet", "Marcus");

    assert.deepEqual(calls, ["Marcus1"]);
  });

  test("once listener is called only on the first emit", () => {
    const emitter = new Emitter();
    const calls = [];
    const fn = (name) => calls.push(name);

    emitter.once("greet", fn);
    emitter.emit("greet", "Marcus");
    emitter.emit("greet", "Marcus");

    assert.deepEqual(calls, ["Marcus"]);
  });

  test("if a once-listener is subscribed first, the next listener in the same emit is also called", () => {
    const emitter = new Emitter();
    const calls = [];
    const fn = (name) => calls.push(name);
    const fn1 = (name) => calls.push(name + "1");

    emitter.once("greet", fn);
    emitter.on("greet", fn1);
    emitter.emit("greet", "Marcus");

    assert.deepEqual(calls, ["Marcus", "Marcus1"]);
  });

  test("if the once listener was the only one, after it was triggered, the next emit returns false", () => {
    const emitter = new Emitter();
    const calls = [];
    const fn = (name) => calls.push(name);

    emitter.once("greet", fn);
    emitter.emit("greet", "Marcus");
    const whatEmitReturned = emitter.emit("greet", "Marcus");

    assert.equal(whatEmitReturned, false);
  });
});
