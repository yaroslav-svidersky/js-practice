function makeGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const hello = makeGreeter("Привет");
const goodMorning = makeGreeter("Доброе утро");
console.log(hello("Аня")); // "Привет, Аня!"
console.log(goodMorning("Иван")); // "Доброе утро, Иван!"
