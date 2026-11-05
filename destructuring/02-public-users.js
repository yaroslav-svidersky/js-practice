const users = [
  {
    id: 1,
    name: "Анна",
    email: "anna@mail.com",
    password: "qwerty",
    role: "admin",
  },
  {
    id: 2,
    name: "Иван",
    email: "ivan@mail.com",
    password: "12345",
    role: "user",
  },
  {
    id: 3,
    name: "Мария",
    email: "maria@mail.com",
    password: "pass",
    role: "user",
  },
];

function toPublicUser(user) {
  const { email, password, ...publicUser } = user;
  return publicUser;
}

function getPublicUsers(users) {
  const publicUsers = users.map(toPublicUser);
  return publicUsers;
}

function greetUser({ name, role }) {
  return `Привет, ${name} (${role})!`;
}

console.log(toPublicUser(users[0])); // { id: 1, name: 'Анна', role: 'admin' }
console.log(getPublicUsers(users)); // [ { id: 1, name: ..., role: ... }, { id: 2, name: ..., role: ... }, { id: 3, name: ..., role: ... } ]
console.log(greetUser(users[2])); // Привет, Мария (user)!
console.log(users); // users без изменений
