# Предсказания: event loop и setTimeout

## 1

```js
console.log(1);
setTimeout(() => console.log(2), 100);
setTimeout(() => console.log(3), 0);
console.log(4);
```

Ответ:
1
4
3
2

Почему:
Потому что 2 и 3 в конце очереди вызовов, 100 и 0 мс соответственно. То есть 3 выведется через 0 мс, а два через 100.

## 2

```js
setTimeout(() => console.log("A"), 50);
setTimeout(() => console.log("B"), 10);
setTimeout(() => console.log("C"), 10);
```

Ответ:
B
C
A

Почему:
Тут у C и B одинаково 10 мс, но B раньше. Либо в том же порядке B сначала, как я написал, либо в обратном порядке выхода из стека, будет C, B, A. Догадка.

## 3

```js
let x = 1;
setTimeout(() => console.log(x), 0);
x = 2;
```

Ответ:
2

Почему:
x это имя переменной, сетТаймаут получает колбэк, консол лог внутри стрелочной функции
По всему выходит, что мы сначала поменяем x = 2, а потом вызовем ранее отложенную функцию, которая выводит значение x.
Догадка.

## 4

```js
console.log("start");
setTimeout(() => {
  console.log("outer");
  setTimeout(() => console.log("inner"), 0);
  console.log("after inner");
}, 0);
setTimeout(() => console.log("second"), 0);
console.log("end");
```

Ответ:
start
end
outer
after inner
second
inner

Почему:
Тут опять setTimeout с одинаковым мс... Поэтому что бы не расходится со вторым, тоже сначала идет первый setTimeout с 0 мс, потом второй после него setTimeout с 0 мс и т.д.
Я предполагаю ещё, что setTimeout внутри setTimeout добавляет новый отложенный вызов в конец всей очереди.
Догадка.

## 5

```js
const start = Date.now();
setTimeout(() => console.log("timer"), 0);
while (Date.now() - start < 1000) {}
console.log("loop done");
```

Ответ (порядок строк + через сколько примерно появится "timer"):
loop done
timer

Почему:
Видимо, дата минус дата даёт число мили секунд разницы. timer появится через, вероятно, ~1000 мс. То есть когда цикл закончится, тогда выведется loop done, а потом через 0 мс timer.
Догадка.

## 6

```js
function hello() {
  console.log("hello");
}
console.log("A");
setTimeout(hello(), 1000);
console.log("B");
```

Ответ (или будет ошибка?):
ReferenceError

Почему:
setTimeout ждёт функцию первым аргументом
