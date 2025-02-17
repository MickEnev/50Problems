function reverseString(string) {
    let arr = string.split("");
    arr.reverse();
    res = arr.join("");
    return res;
}

console.log(reverseString("My Name Jeff"));