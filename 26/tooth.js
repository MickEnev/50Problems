function distinct(arr) {
    let res = [];
    for (let el of arr) {
        if (!res.includes(el)) {
            res.push(el);
        }
    }
    return res;
}

console.log(distinct([1, 2, 2, 3, 4, 5, 6]));

function distinctHardMode(arr) {
    let map = new Map();
    res = [];
    for (let el of arr) {
        if (map.has(el)) {
            map.set(el, map.get(el) + 1);
        } else {
            map.set(el, 1);
        }
    }

    for (let [key, value] of map) {
        if (value == 1) {
            res.push(key);
        }
    }
    return res;
}

console.log(distinctHardMode([1, 2, 2, 3, 4, 5, 3, 5]));