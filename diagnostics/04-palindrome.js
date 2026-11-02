function isPalindromeA (str) {
    str = str.toLowerCase().replaceAll(" ", "");
    return str === str.split("").reverse().join("");
}

function isPalindromeB (str) {
    const cleaned = str.toLowerCase().replaceAll(" ", "");
    for (let i = 0; i < cleaned.length / 2; i++) {
        if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindromeA("Шалаш"));
console.log(isPalindromeA("А роза упала на лапу Азора"));
console.log(isPalindromeA("Привет"));
console.log(isPalindromeA("Озеро"));

console.log(isPalindromeB("Шалаш"));
console.log(isPalindromeB("А роза упала на лапу Азора"));
console.log(isPalindromeB("Привет"));
console.log(isPalindromeB("Озеро"));