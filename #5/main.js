function reverseArray(array) {
    let toReturn = []
    for (let i = array.length - 1; i >= 0; i--) {
        toReturn.push(array[i]);
    }
    return toReturn;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log([1, 2, 3, 4, 5])