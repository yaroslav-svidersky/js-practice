let count = 5;
count = 5;

const names: string[] = ["Ann", "Bob"];
names.push("three");

const first = names[0];
console.log(first.toUpperCase());

function isAdult(age: number): boolean {
  return age >= 18;
}

function greet(name: string) {
  return "Hi, " + name;
}

console.log(count, isAdult(20), greet("Ann"));
