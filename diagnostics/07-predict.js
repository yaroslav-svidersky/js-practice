// 7.1 — типы и приведение
console.log(1 + "2");
console.log("5" - 2);
console.log(1 == "1", 1 === "1");

// 7.2 — ссылки
let a = { x: 1 };
let b = a;
b.x = 2;
console.log(a.x);

// 7.3 — const и массивы
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// 7.4 — замыкание
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const c = counter();
c();
c();
console.log(c());

// 7.5 — порядок выполнения
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
