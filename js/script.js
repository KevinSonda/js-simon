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

    return numbers;
}

// assegno ad una variabile il valore restituito dalla funzione createArrayNumbers
let random_numbers = createArrayNumbers();
document.getElementById('numbers').innerHTML = random_numbers;

//setTimeout che si occupa di svuotare la lista
setTimeout(function () {
    document.getElementById('numbers').innerHTML = '';
},5000);

// setTimeout in cui andiamo a permettere l'utente di inserire ed a mostrare il risultato
setTimeout(function () {
    //creo un array vuoto per i numeri inseriti dall'utnete
    let user_numbers = [];

    //eseguo un ciclo di 5 ripetizioni in cui vado a mostrare ad ogni iterazione il prompt di inserimento
    for (let i = 0; i < 5; i++){
        //permettere all'utente di inserire i suoi numeri
        user_numbers.push(parseInt(prompt('Inserisci il tuo numero')));
    }

    //array di numeri individuati
    let guessed = [];
    //controllare che i numeri inseriti dall'utnete siano presenti nell'array dei numeri casuali
    for (let i = 0; i < 5; i++){
        if (random_numbers.includes(user_numbers[i])) {
            guessed.push(user_numbers[i]);
        }
    }

    //mostro i numeri indovinati nella pagina
    document.getElementById('numbers').innerHTML = `Hai indovinato ${guessed.length} numeri. Sono i seguenti ${guessed}`;
}, 6000)