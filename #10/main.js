function numVowels(string) {
    let set = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (set.has(string[i].toLowerCase())) {
            count++;
        }
    }
    return count
}

console.log(numVowels("The answer Iis 5"));