function negNumFilter(array) {
    let toReturn = []
    for (let i = 0; i < array.length; ++i) {
        if (array[i] > 0) {
            toReturn.push(array[i])
        } 
    }
    return toReturn;
}

console.log(negNumFilter([1, 2, -3, 4, -5, 6]));