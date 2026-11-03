function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
    },

    decrement() {
      count--;
    },

    getValue() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getValue()); // 1

counter.count = 100;
console.log(counter.getValue()); // 1
console.log(counter.count); // 100
