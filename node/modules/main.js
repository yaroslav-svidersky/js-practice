console.log("main start");

const a = require("./counter");
const b = require("./counter");

console.log(a === b);
console.log(a.increment());
console.log(b.increment());

console.log("main end");
