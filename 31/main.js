function capFirstLetters(string) {
    string = string.replace(/\s+/g, " ");
    string = string.trim();
    console.log(string);
    let arr = string.split(" ");
    console.log(arr);
    let res = []
    for (let el of arr) {
        let newEl = el[0].toUpperCase();
        newEl += el.slice(1, el.length);
        res.push(newEl);
    }
    return res.join(" ");
}

console.log(capFirstLetters("hello My Name is    edmond dantes.  ! 123 "))