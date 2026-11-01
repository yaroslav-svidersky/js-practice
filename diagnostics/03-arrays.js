const nums = [-5, -2, -9];

function findMax (arr) {
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

console.log(findMax(nums));
console.log(countEven(nums));