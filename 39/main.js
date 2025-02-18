function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let l = 0;
        let r = 1;
        while (l < arr.length && r < arr.length) {
            if (arr[r] >= arr[l]) {
                l = r;
                r++;
            } else {
                var b = arr[r];
                arr[r] = arr[l];
                arr[l] = b;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 6, -15, 1, 10, 9, 2, 7, 3, 10, 10, 10]));