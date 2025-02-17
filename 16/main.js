// Sum of digits in a positive number

function sumDigits(number) {
    let num = number.toString();
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
    }
    return sum;
}

console.log(sumDigits(1123));