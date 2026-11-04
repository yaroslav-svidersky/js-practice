function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i);
  }
  return accumulator;
}

const nums = [1, 2, 3, 4];

const sum = myReduce(nums, (acc, n) => acc + n, 0);
console.log(sum); // 10

const max = myReduce(nums, (acc, n) => (n > acc ? n : acc), nums[0]);
console.log(max); // 4

const words = ["кот", "и", "пёс", "и", "кот"];
const counts = myReduce(
  words,
  (acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  },
  {},
);
console.log(counts); // { кот: 2, и: 2, пёс: 1 }
