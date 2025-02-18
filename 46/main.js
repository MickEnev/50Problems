function deepCopyJaggedArray(arr) {
    let res = [];
    for (let el of arr) {
        if (Array.isArray(el)) {
            el = deepCopyJaggedArray(el);
        }
        res.push(el);
        
    }
    return res;
}

console.log(deepCopyJaggedArray([1, 2, 3, [4, 5, 6, [7, 8, 9, 10, [1932, 4124, 9], [123]], [12323]]]))