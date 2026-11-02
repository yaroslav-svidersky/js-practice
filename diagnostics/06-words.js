function wordCount(text) {
    const counts = {};
    const words = text
        .toLowerCase()
        .split(" ")
        .filter((word) => word !== "");
    for (word of words) {
        if (word in counts) {
            counts[word]++;
        } else {
            counts[word] = 1;
        }
    }
    return counts;
}

console.log(wordCount("Кот и пёс и кот"));