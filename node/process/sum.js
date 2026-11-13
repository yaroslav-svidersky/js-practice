function sum(numArray) {
  return numArray.reduce((acc, val) => acc + val, 0);
}

const argArray = process.argv.slice(2);
const numArray = argArray.map((elem) => Number(elem));
const badIndex = numArray.findIndex((num) => Number.isNaN(num));
if (badIndex !== -1) {
  console.error(`Not a number: ${argArray[badIndex]}`);
  process.exitCode = 1;
} else {
  console.log(sum(numArray));
}
