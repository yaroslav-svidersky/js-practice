console.log("counter.js loaded");

let count = 0;

function increment() {
  count++;
  return count;
}

module.exports = { increment };
