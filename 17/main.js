// Print first 100 prime numbers
const isPrime = require('../15/main.js');


function firstBenjaminPrime() {
    let res = []
    for (let i = 1; i <= 100; i++) {
        if (isPrime(i)) {
            res.push(i);
        }
    }
    return res;
}

console.log(firstBenjaminPrime());