function ASCIItoString(ar) {
    return String.fromCharCode(...ar);
}

console.log(ASCIItoString([77, 105, 99, 107, 33, 33]));