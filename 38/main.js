function encrypt(word, shift) {
    let res = "";
    for (let i = 0; i < word.length; i++) {
        let code = word.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            res += String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
        } else if (code >= 97 && code <= 122) {
            res += String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
        } else {
            res += text[i];
        }
    }
    return res;
}

function decrypt(word, shift) {
    return encrypt(word, -shift);
}

console.log(encrypt("ZorgonA", 1));
console.log(decrypt(encrypt("ZorgonA", 1), 1));