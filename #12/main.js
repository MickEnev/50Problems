function palindrome(string) {
    string = string.replace(/\s/g, "");
    let l = 0;
    let r = string.length - 1;
    while (l != r) {
        if (string[l].toLowerCase() != string[r].toLowerCase()) {
            return false;
        }
        l += 1;
        r -= 1;
    }
    return true;
}

console.log(palindrome(" Rac   eCar" ));