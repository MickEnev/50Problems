function charFrequency(string) {
    let map = new Map();
    for (let i = 0; i < string.length; i++) {
        if (map.has(string[i])) {
            console.log("enter");
            map.set(string[i], map.get(string[i]) + 1);

        } else {
            map.set(string[i], 1);
        }
    }
    console.log(map);
    let res = [];
    for (let [key, value] of map) {
        console.log(key, value);
        res.push(key, value);
    }
    return res;
}

console.log(charFrequency("Hello my name is Javier and I am from Espana."));