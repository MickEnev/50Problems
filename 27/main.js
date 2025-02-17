// Calculate sum of first 100 prime numbers
const isPrime = require('../15/main.js');
function sumFirstPrime(x) {
    let sum = 0;
    let count = 0;
    let index = 0;
    while (count < x) {
        if (isPrime(index)) {
            sum += index;
            count++;
        }
        index++;
    }
    return sum;
}

console.log(sumFirstPrime(5));