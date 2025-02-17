function isPrime(number) {
    if (number === 2) {
        return true;
    }
    if (number < 2) {
        return false;
    }

    let maxDiv = Math.sqrt(number);

    for (let i = 2; i <= maxDiv; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < 20; i++) {
    console.log("The Number " + i + " is prime? " + isPrime(i));
}

module.exports = isPrime;