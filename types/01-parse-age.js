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

module.exports = { parseAge };
