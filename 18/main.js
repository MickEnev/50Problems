// Return the first X prime numbers after Y
const isPrime = require('../15/main.js');

function firstPrimeAfter(numPrime, numStart) {
    let index = numStart;
    let numFound = 0;
    let res = [];
    while (numFound < numPrime) {
        if (isPrime(index)) {
            res.push(index);
            numFound++;
        }
        index++;
    }
    return res;
}

console.log(firstPrimeAfter(10, 0));