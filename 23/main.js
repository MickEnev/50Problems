// Returns two arrays merged either interlaced or side by side depending on input
function mergeTwoArrays(array1, array2, interlaced) {
    res = [];
    let i = 0;
    if (interlaced) {
        while (i < array1.length && i < array2.length) {
            res.push(array1[i]);
            res.push(array2[i]);
            i++;
        }
        if (i < array1.length) {
            for (let j = i; j < array1.length; j++) {
                res.push(array1[j]);
            }
        } else if (i < array2.length ){
            for (let j = i; j < array2.length; j++) {
                res.push(array2[j]);
            }
        }
    } else {
        for (let el of array1) {
            res.push(el);
        }
        for (let el of array2) {
            res.push(el);
        }
    }
    return res;
}

console.log(mergeTwoArrays([1, 2, 3, 99], [4, 5, 6, 77, 88], false));