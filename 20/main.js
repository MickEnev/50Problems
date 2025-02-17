function rotateArrayRight(array) {
    array.unshift(array[array.length - 1]);
    array.pop();
    return array;
}

console.log(rotateArrayRight([1, 2, 3, 4]))