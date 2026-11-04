function myMap(arr, callback) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(callback(arr[i], i));
  }
  return newArray;
}

const nums = [1, 2, 3];
const doubled = myMap(nums, (n) => n * 2);
const gods = myMap(
  [{ name: "Zeus" }, { name: "Poseidon" }, { name: "Hades" }],
  (item) => item.name,
);
const letters = myMap(["а", "б"], (item, index) => `${index}: ${item}`);
console.log(doubled); // [2, 4, 6]
console.log(nums); // [1, 2, 3] — исходный не изменился
console.log(gods); // [Zeus, Poseidon, Hades]
console.log(letters); // ["0: а", "1: б"]
