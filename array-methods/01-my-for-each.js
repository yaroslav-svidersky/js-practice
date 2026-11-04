function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach(["а", "б", "в"], (item, index) => {
  console.log(index, item);
});
// 0 а
// 1 б
// 2 в
