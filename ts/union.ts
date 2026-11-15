function toId(value: string | number): number {
  const isString = typeof value === "string";
  if (isString && value.trim() === "") {
    throw new TypeError("An empty string is not allowed");
  }
  const result: number = isString ? Number(value) : value;
  if (!Number.isInteger(result)) {
    throw new TypeError("Must be an integer");
  }
  return result;
}

console.log(toId(5));
console.log(toId("7"));
