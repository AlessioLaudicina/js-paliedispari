/* 
- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto.
*/

const sceltaUtente = prompt('pari o dispari');
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

let somma = numeroUtente + numeroComputer(numeroMin, numeroMax)

function pariDispari(somma){
    let risultato = somma % 2;
    if (risultato == 0){
      return 'pari';
    } else if(risultato == 1){
      return 'dispari';
    }
  }

  console.log (pariDispari(somma))

  if (sceltaUtente == pariDispari(somma)){
    console.log('vittoria utente')
  } else {
    console.log('vittoria Computer')
  }





