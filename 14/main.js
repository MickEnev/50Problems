function findFib(n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return findFib(n - 1) + findFib(n - 2);                         
}


for (let i = 0; i < 10; i++) {
    console.log(findFib(i));
}