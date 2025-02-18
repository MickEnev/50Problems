function sumJaggedArray(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(arr[i].flat(Infinity));
        } else {
            res.push(arr[i]);
        }
    }
    let sum = 0;
    for (let el of res) {
        sum += el;
    }
    return sum;
}

console.log(sumJaggedArray([1, 1, 1, [1, 1], [1, 1, 1, [1, 1, 1, [1, 1, 1]]]]));