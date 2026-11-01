function findMax (arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let max = arr[0];
    for (const n of arr) {
        if (n > max) {
            max = n;
        }
    }
    return max;
}

function countEven (arr) {
    let totalEvens = 0;
    for (const n of arr) {
        if (n % 2 === 0) {
            totalEvens++;
        }
    }
    return totalEvens;
}

console.log(findMax([3, 17, -4, 8, 0, 11]));
console.log(countEven([3, 17, -4, 8, 0, 11]));

console.log(findMax([-5, -2, -9]));
console.log(countEven([-5, -2, -9]));

console.log(findMax([]));