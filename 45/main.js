function findMaxInJaggedArray(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(arr[i].flat(Infinity));
        } else {
            res.push(arr[i]);
        }
    }
    let max = -Infinity;
    for (let el of res) {
        if (el > max) {
            max = el;
        }
    }
    return max;
}

console.log(findMaxInJaggedArray([1, 2, 3, [4, 5, 6, [7, 8, 9, 10, [1932, 4124, 9], [123]], [12323]]]));