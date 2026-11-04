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

console.log(parseAge("42")); // 42
console.log(parseAge(" 42 ")); // 42
console.log(parseAge("")); // null
console.log(parseAge("   ")); // null
console.log(parseAge("42abc")); // null
console.log(parseAge("-5")); // null
console.log(parseAge("42.5")); // null — не целое
console.log(parseAge(null)); // null
console.log(parseAge(undefined)); // null
console.log(parseAge("500")); // null
console.log(parseAge("0")); // 0
console.log(parseAge("150")); // 150
console.log(parseAge(true)); // null
