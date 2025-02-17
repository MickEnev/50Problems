function inAr1NotAr2(ar1, ar2) {
    let res = [];
    for (let el of ar1) {
        if (!ar2.includes(el)) {
            res.push(el);
        }
    }
    return res;
}

console.log(inAr1NotAr2([1, 2, 3, 4, 5, 1723123], [1, 2, 3, 5, 99, 12]));