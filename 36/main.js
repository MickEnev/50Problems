// String to array of ASCII codes of each char
function stringToASCIIArray(string) {
    let ar = []
    for (let i = 0; i < string.length; i++) {
        ar.push(string.charCodeAt(i));
    }
    return ar;
}

console.log(stringToASCIIArray("Hello my name is mick."))