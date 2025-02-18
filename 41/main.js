
const distance = require('../40/main.js');

function areIntersecting(c1x, c1y, c1r, c2x, c2y, c2r) {
    let distanceBetween = distance(c1x, c2x, c1y, c2y);
    if (distanceBetween < (c1r + c2r)) {
        return true;
    } else {
        return false;
    }
}

console.log(areIntersecting(1, 2, 3, 4, 5, 3));