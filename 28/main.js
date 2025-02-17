// Print distance between the first X prime numbers
const isPrime = require('../15/main.js');

function distancePrime(n) {
    let lastPrime = 2;
    let i = 3;
    let foundPrimes = 1;
    while (foundPrimes < n) {
        if (isPrime(i)) {
            console.log("Current Prime is: " + i + " Distance from " + lastPrime + " is " + (i - lastPrime));
            lastPrime = i;
            foundPrimes++;
        }
        i++;
    }
}

distancePrime(10);