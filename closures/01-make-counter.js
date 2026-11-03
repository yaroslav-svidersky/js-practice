function makeCounter(step) {
  let count = 0;
  return function () {
    count = count + step;
    return count;
  };
}

const byOne = makeCounter(1);
const byFive = makeCounter(5);
byOne(); // 1
byOne(); // 2
byFive(); // 5
byFive(); // 10
console.log(byOne()); // 3
