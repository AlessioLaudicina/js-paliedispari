/* 
- Chiedere all’utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma 
*/

const parola = prompt('Inserisci una parola');
console.log(parola);

const parolaInvertita = giraParola(parola);
console.log(parolaInvertita);


if(parola == parolaInvertita){
  alert('Palindroma');
} else{
  alert('Non è Palindroma');
}


function giraParola(parolaDaGirare){

  let parolaGirata = "";

  for (let i = parolaDaGirare.length - 1; i >= 0; i--){
    parolaGirata += parolaDaGirare[i];
  }

  return parolaGirata;
}




 