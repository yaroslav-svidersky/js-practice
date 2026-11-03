## А1

Предсказание:
let x = 10;
function show() {
console.log(x);
}
x = 20;
show(); // 20

Почему:
Переменная x выше по уровню и её поменяли на 20 перед вызовом show().

На самом деле:
20, ответ верный.

## А2

Предсказание:
function counter() {
let count = 0;
return function () {
count++;
return count;
};
}
const c1 = counter();
const c2 = counter();
c1();
c1();
console.log(c1(), c2()); // 2, 0

Почему:
counter() записали в c1 и c2; потом c1 вызвали два раза, то count в "её рюкзаке" стал 2, а c2 не вызывали и у неё по прежнему 0.
На самом деле:
3 и 1. Я как то упустил из виду, что c1(), c2() вызываются ещё по разу внутри console.log().

## А3

Предсказание:
const name = "Внешнее";
function f() {
const name = "Внутреннее";
console.log(name);
}
f(); // Внутреннее
console.log(name); // Внешнее

Почему:
Сначала я подумал, что в обоих будет "Внутреннее", потому что name перезаписывается в f(). Но так как в f() стоит const name, то это создается новая переменная, видимая только внутри функции. Полагаю, она будет приоритенее для f(), чем внешняя.

На самом деле:
Ответ верный.

## А4

Предсказание:
function outer() {
const secret = 42;
function inner() {
return secret;
}
return inner;
}
const getSecret = outer();
console.log(getSecret()); // 42
console.log(secret); // ReferenceError

Почему:
Вызов getSecret() зовёт outer(), та возвращает inner(), а та, в свою очередь, возвращает secret.
Просто secret даст ReferenceError, потому что она в замыкании и не видна.

На самом деле:
Ответ верный.
