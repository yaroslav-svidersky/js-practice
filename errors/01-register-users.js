const applications = [
  { name: "Анна", age: "25" },
  { name: "", age: "30" },
  { name: "Иван", age: "abc" },
  { name: 42, age: "20" },
  { name: " Мария ", age: " 19 " },
];

function parseAge(age) {
  const maxAge = 150;
  const ageNumber = Number(age);
  if (typeof age !== "string") {
    return null;
  }
  age = age.trim();
  if (age === "") {
    return null;
  }
  if (!Number.isInteger(ageNumber)) {
    return null;
  }
  if (ageNumber < 0 || ageNumber > maxAge) {
    return null;
  }
  return ageNumber;
}

function createUser(data) {
  let { name, age } = data;
  if (typeof name !== "string") {
    throw new TypeError("name не строка");
  }
  name = name.trim();
  if (data.name.trim() === "") {
    throw new RangeError("name после trim() пустой");
  }
  age = parseAge(age);
  if (age === null) {
    throw new RangeError("age не число");
  }
  return { name: name, age: age };
}

function registerUsers(list) {
  const created = [];
  const errors = [];
  let count = 1;
  for (const data of list) {
    try {
      created.push(createUser(data));
    } catch (error) {
      errors.push(`Заявка ${count}: ${error.name}: ${error.message}`);
    } finally {
      count++;
    }
  }
  return {
    created: created,
    errors: errors,
  };
}

console.log(createUser(applications[0]));
console.log(registerUsers(applications));
