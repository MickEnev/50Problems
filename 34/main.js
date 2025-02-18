// Split CSV into a 2D array 
function CSVToArray(string) {
    let ar = string.split("\n");

    for (let i = 0; i < ar.length; i++) {
        let line = ar[i].split(";");
        ar[i] = line;
    }
    return ar;
}

console.log(CSVToArray("My;Name;Is;Mick;And;000-5234-52444;Like;To;Code\nTiger;Woods;Is;A;Golfer"))