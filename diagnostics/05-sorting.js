const users = [
  { name: "Олег", age: 17 },
  { name: "Анна", age: 25 },
  { name: "Иван", age: 31 },
  { name: "Мария", age: 16 },
  { name: "Пётр", age: 19 },
];

function getAdultNames(users) {
  return users
    .filter((user) => user.age >= 18)
    .sort((a, b) => a.age - b.age)
    .map((user) => user.name);
}

console.log(getAdultNames(users));
