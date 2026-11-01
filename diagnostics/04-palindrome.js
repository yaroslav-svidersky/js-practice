function isPalindromeA (str) {
    str = str.toLowerCase().replaceAll(" ", "")
    return str === str.split("").reverse().join("");
}

console.log(isPalindromeA("Шалаш"));
console.log(isPalindromeA("А роза упала на лапу Азора"));
console.log(isPalindromeA("Привет")); 