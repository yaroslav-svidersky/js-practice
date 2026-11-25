class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count += 1;
    return this.count;
  }
}

function run(fn) {
  return fn();
}

const counter = new Counter();
console.log(counter.increment());

const inc = counter.increment;
try {
  inc();
} catch (err) {
  console.log(`inc(): ${err.message}`);
}

try {
  run(counter.increment);
} catch (err) {
  console.log(`run(counter.increment): ${err.message}`);
}

console.log(run(() => counter.increment()));
console.log(run(counter.increment.bind(counter)));

class Context {
  constructor() {
    this.name = "Marcus";
    this.city = {
      name: "Kyiv",
      f1() {
        return this.name;
      },
      f2: () => this.name,
    };
  }
}

const context = new Context();
console.log(context.city.f1());
console.log(context.city.f2());
