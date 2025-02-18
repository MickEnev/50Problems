// Return the number of words in a string
function numWords(string) {
    // Iterate through string until space
    // When space increment word counter
    let count = 0;
    string = string.replace(/\s+/g, " ");
    for (let i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            count++;
        }
    }
    return count;
}

console.log(numWords("   Edmond!!!!!!!!!!!!!!!!!!!!!!!     Dantes      Hello my            name is Mi ck."));