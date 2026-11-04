function myFilter(arr, callback) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

const nums = [5, 12, 8, 1, 20];
const gods = [
  { name: "Zeus" },
  { name: "Hephaestus" },
  { name: "Poseidon" },
  { name: "Hades" },
  { name: "Athena" },
];
console.log(myFilter(nums, (n) => n > 7)); // [12, 8, 20]
console.log(myFilter(nums, (n, i) => i % 2 === 0)); // [5, 8, 20] — элементы с чётным индексом
console.log(myFilter(gods, (g) => ["Hephaestus", "Athena"].includes(g.name))); // [ { name: 'Hephaestus' }, { name: 'Athena' } ]
