// Sum the numbers in a comma delimited string
function sumString(string) {
    let arr = string.split(",");
    let sum = 0;
    for (let el of arr) {
        sum += parseInt(el);
    }
    return sum;
}

console.log(sumString("2, 2, 6, 10, 1"))

function sumStringFloats(string) { 
    let arr = string.split(",");
    let sum = 0;
    for (let el of arr) {
        sum += parseFloat(el);
    }
    return sum;
}

console.log(sumStringFloats("1.5, 1.5"));