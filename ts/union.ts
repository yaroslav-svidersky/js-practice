function toId(value: string | number): number {
  if (typeof value === "string" && value.trim() === "") {
    throw new TypeError("An empty line is not permitted.");
  }
  const result = typeof value === "string" ? Number(value) : value;
  if (!Number.isInteger(result)) {
    throw new TypeError("Must be an integer");
  }
  return result;
}

console.log(toId(5));
console.log(toId("7"));
