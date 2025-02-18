const charMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8],
    ['i', 9],
    ['j', 10],
    ['k', 11],
    ['l', 12],
    ['m', 13],
    ['n', 14],
    ['o', 15],
    ['p', 16],
    ['q', 17],
    ['r', 18],
    ['s', 19],
    ['t', 20],
    ['u', 21],
    ['v', 22],
    ['w', 23],
    ['x', 24],
    ['y', 25],
    ['z', 26]
]);

let test = 0;

function encrypt(word, shift) {
    let res = "";
    console.log("1");
    for (let i = 0; i < word.length; i++) {
        console.log(charMap.get(word[i].toLowerCase()));
        res += getKeyFromValue(charMap, charMap.get(word[i].toLowerCase()) + shift);
        console.log(res);
    }
    console.log("2");
    return res;
}

function decrypt(word, shift) {
    return encrypt(word, -shift);
}

function getKeyFromValue(map, value) {
    for (let [key, mapValue] of map.entries()) {
        if (mapValue === value) {
            return key;
        }
    }
    return undefined;
}

console.log(encrypt("Mick", 1));
console.log(decrypt(encrypt("Mick", 1)));