function wordCount(text) {
  const counts = {};
  const words = text
    .toLowerCase()
    .split(" ")
    .filter((word) => word !== "");
  for (const word of words) {
    if (word in counts) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
  }
  return counts;
}

console.log(wordCount("Кот и пёс и кот"));
console.log(wordCount("Убивать убивать убивать убивать!"));
console.log(wordCount("1  2   3  2   4  3 4  3  4    4"));
console.log(wordCount(""));
