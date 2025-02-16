function sortArrayDesc(array) {
    return array.sort((a, b) => b - a);
}

function sortArrayAsc(array) {
    return array.sort((a, b) => a - b);
}

console.log(sortArrayDesc([1, 2, 3, 99, 43, 3123, 32]));
console.log(sortArrayAsc([1, 2, 3, 99, 43, 3123, 32]));