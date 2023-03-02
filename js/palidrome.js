/* 
- Chiedere all’utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma 
*/

let parolaUtente = prompt('inserisci una parola');
let parolaDivisa = parolaUtente.split('')
console.log(parolaDivisa)

 parolaDivisa = parolaDivisa.reverse();
 console.log(parolaDivisa)

 let parolaInvertita = parolaDivisa.join('');
 console.log(parolaInvertita)

 if(parola == parolaInvertita){
    console.log('la parola è palindroma')
 } else {
    console.log('la parola non è palindroma')
 }

 