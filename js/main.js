/* 
- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto.
*/

const sceltaUtente = prompt('Pari o dispari');
console.log(sceltaUtente);

const numeroUtente = parseInt (prompt('Inserisci un numero da 1 a 5'));
console.log('Numero Utente: ' + numeroUtente)

let numeroMin = 1;
let numeroMax = 5;


function numeroComputer(numeroMin, numeroMax){
    let numeroComputer = Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;
    console.log( 'Numero Computer: ' + numeroComputer);
    return numeroComputer;

    

}

let somma = numeroUtente + numeroComputer;
console.log(somma)





