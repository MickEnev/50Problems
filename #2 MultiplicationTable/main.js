console.log("x | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10|");
for (let i = 1; i < 11; i++) {
    let row = "";
    if (i < 10) {
        row += i.toString() + " | ";
    } else {
        row += i.toString() + "| ";
    }
    
    for (let j = 1; j < 11; j++) {
        if (i * j >= 10) {
            row += (i * j).toString() + "| ";
        } else {
            row += (i * j).toString() + " | ";
        }
        
    }
    console.log(row);
}