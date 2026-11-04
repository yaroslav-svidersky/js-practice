function parseAge(age) {
  const maxAge = 150;
  if (typeof age === "string") {
    age = age.trim();
  }
  if (Number(age) === 0 || !Number.isInteger(Number(age))) {
    return null;
  }
  if (Number(age) < 0 || Number(age) >= maxAge) {
    return null;
  }
  return Number(age);
}

console.log(parseAge("42")); // 42
console.log(parseAge(" 42 ")); // 42 — пробелы по краям допустимы
console.log(parseAge("")); // null — помните, чему равно Number("")
console.log(parseAge("   ")); // null
console.log(parseAge("42abc")); // null
console.log(parseAge("-5")); // null
console.log(parseAge("42.5")); // null — не целое
console.log(parseAge(null)); // null
console.log(parseAge(undefined)); // null
console.log(parseAge("500")); // null
