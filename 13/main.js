function fib(a, b) {
    let count = 10;
    let res = [a, b]
    while (res.length < 10) {
        let c = a + b;
        res.push(c);
        a = b;
        b = c;
        count--;
    }
    return res;
}

console.log(fib(0, 1));