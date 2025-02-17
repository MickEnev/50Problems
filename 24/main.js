function exclusive(ar1, ar2) {
    let res = [];
    for (let el of ar1) {
        if (!ar2.includes(el)) {
            res.push(el);
        }
    }
    for (let el of ar1) {
        if (!ar1.includes(el)) {
            res.push(el);
        }
    }
    return res;
}

console.log(exclusive([1, 2, 3, 55, 812312], [1, 4, 3, 55]));