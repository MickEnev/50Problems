// Rotate an array one to the left
function rotateArray(array) {
    if (array.length <= 1) {
        return array;
    }
    let res = []
    res.push(array[1])
    for (let i = 2; i < array.length; i++) {
        res.push(array[i]);
    }
    res.push(array[0]);
    return res;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6]));