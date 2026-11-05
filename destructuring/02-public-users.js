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
  const publicUsers = [];
  for (const user of users) {
    const { email, password, ...publicUser } = user;
    publicUsers.push(publicUser);
  }
  return publicUsers;
}

function greetUser({ name, role }) {
  return `Привет, ${name} (${role})!`;
}

console.log(toPublicUser(users[0]));
console.log(getPublicUsers(users));
console.log(greetUser(users[2]));
