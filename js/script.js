// definisco la funzione che genera  numeri casuali
function generateRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}

//creao la funzione che mi genera l'array dei numeri
function createArrayNumbers() {
    let numbers = [];

    //verifico se la lunghezza dell'array e minore di 5. Se e vera la condizione genero il numero e lo pusho nell'array
    while (numbers.length < 5) {
        // genero il numero con la funzione defiita sopra
        let num = generateRandomNumber();

        //verifico che il numero non sia incluso nell'array
        if (!numbers.includes(num)) {
            //pusho il numero nell'array
            numbers.push(num);
        }
    }
}