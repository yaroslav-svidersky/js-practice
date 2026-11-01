const nums = [3, 17, -4, 8, 0, 11];

function findMax (arr) {
    let total = 0;
    for (const n of arr) {
        if (n > total) {
            total = n;
        }
    }
    return total;
}

function countEven (arr) {
    let total = 0;
    for (const n of arr) {
        if (n % 2 === 0) {
            total = total++;
        }
    }
    return total;
}

console.log(findMax(nums));
console.log(countEven(nums));