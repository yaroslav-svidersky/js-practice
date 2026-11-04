function myMap(arr, callback) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = callback(arr[i]);
  }
  return newArray;
}

const nums = [1, 2, 3];
const doubled = myMap(nums, (n) => n * 2);
console.log(doubled); // [2, 4, 6]
console.log(nums); // [1, 2, 3] — исходный не изменился
