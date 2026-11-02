const users = [
  { name: "Олег", age: 17 },
  { name: "Анна", age: 25 },
  { name: "Иван", age: 31 },
  { name: "Мария", age: 16 },
  { name: "Пётр", age: 19 },
];

function getAdultNames(users) {
    const adultUsers = [];
    for (const user of users) {
        if (user.age >= 18) {
            adultUsers.push(user);
        }
    }
    adultUsers.sort((a, b) => a.age - b.age);
    const adultNames = [];
    for (const user of adultUsers) {
        adultNames.push(user.name);
    }
    return adultNames;
}

console.log(getAdultNames(users));