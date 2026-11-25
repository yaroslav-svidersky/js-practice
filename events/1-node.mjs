import { EventEmitter } from "node:events";

const emitter = new EventEmitter();
emitter.on("greet", (name) => console.log("first:", name));
emitter.on("greet", (name) => console.log("second:", name));
emitter.once("bye", () => console.log("bye!"));

console.log("before");
emitter.emit("greet", "Marcus");
console.log("after");

emitter.emit("bye");
emitter.emit("bye");
console.log(emitter.emit("nobody"));

emitter.on("error", (err) => console.log("handled:", err.message));
console.log("error listeners:", emitter.listenerCount("error"));

emitter.emit("error", new Error("boom"));
console.log("end");
