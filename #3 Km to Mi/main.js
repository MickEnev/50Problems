function KmToMi(distance) {
    const api = `https://akshayanand.herokuapp.com/api/unit/?type=len&from=kilomts&to=mile&value=${distance}`
    fetch(api)
        .then(response => {
            if (!response.ok) {
                throw new Error('Response failed');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error: ", error);
        })
}

function KmToMi2(distance) { 
    return distance / 1.609;
}

console.log(KmToMi2(5));