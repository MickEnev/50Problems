function colFromArray(arr, col) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i][col]);
    }
    return res;
}

console.log(colFromArray([[1, 2, 3], [4, 2, 5], [9, 2, 0]], 1));