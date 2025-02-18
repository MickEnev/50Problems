// Function to turn a string into an array of the words in the string
function stringToArray(string) { 
    string = string.replace(/[!?,.()]/g, " ");
    string = string.replace(/\s+/g, " ");
    string = string.trim();
    
    let arr = string.split(" ");
    return arr;
}

console.log(stringToArray("What's up...big dog.!!!!      How are you doing today?                       "))