
const shuffleArray = require('../48/main.js');
function arrayOfN(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        res.push(i);
    }
    shuffleArray(res);
    return res;
}

console.log(arrayOfN(10));