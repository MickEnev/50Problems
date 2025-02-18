function longestWordInString(string) {
    string = string.replace(/[!?,.()]/g, " ");
    let words = string.split(" ");
    let longest = [];
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
            longest = []
        } else if (word.length === longestWord.length) {
            longest.push(longestWord);
            longest.push(word);
        }
    }
    if (longest.length > 0) {
        return longest;
    } else {
        return longestWord;
    }
}

console.log(longestWordInString("My name is Mickey."));