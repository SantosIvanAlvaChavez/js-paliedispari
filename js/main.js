/*
 * Esercizio 1
 */

//Chiedere all'utente di inserire una parola
 var parola = prompt('Inserisci una parola').toLowerCase();

//Definizione funzione
function reverseWord (word) {
  var parolaInvertita = '';
  for (var i = word.length - 1; i >= 0; i--) {
    parolaInvertita += word[i]
  }
  return parolaInvertita;
}

//Capire se la parola e palindroma
if (reverseWord(parola) === parola) {
  console.log(parola + ' è palindroma');
} else {
    console.log(parola + ' non è palindroma');
}


/*
 * Esercizio 2
 */

//Chiedere all'utente
 var pariDispari = prompt('Scegli tra: pari o dispari?').toLowerCase();
console.log('Scelto dall\'utente: ' + pariDispari);

//Utente sceglie un numero tra 1 e 5
var numeroUtente = parseInt( prompt('Ora scegli un numero da 1 a 5') );
console.log('Numero Utente: ' + numeroUtente);

//Generazione numero random per il pc tra 1 e 5
var numeroPc = Math.floor( (Math.random() * 5) + 1);
console.log('Numero Pc: ' + numeroPc);

//Sommando i due numeri ottenuti
var somma = numeroUtente + numeroPc;
console.log('Somma dei numeri Utente e Pc: ' + somma);

//Definizione funzione sommma dei numeri e pari o dispari
function pari0Dispari(somma) {
  if ((pariDispari == 'pari') && (somma % 2 == 0)) {
    return true;
  } else if ((pariDispari == 'dispari') && (somma % 2 != 0)) {
    return true;
  } else {
    return false;
  }
}

//Dichiarazione Vincitore
if (pari0Dispari(somma) == true) {
  alert('Complimenti: Hai vinto!!!');
} else {
  alert('Mi dispiace: Hai perso!!!');
}
