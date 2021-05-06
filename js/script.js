// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// FUNZIONI COMUNI
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function chiediNumero(){

    var numeroUtente = parseInt(prompt("Ricordi i numeri che hai letto? Inseriscili qui"));

    return numeroUtente;

    /*/listaUtente.push(numeroUtente);

    console.log(listaUtente);*/
}

// /FUNZIONI COMUNI 

// VARIABILI
var numeroUtente;
var numeriCasuali = [];
var listaUtente = [];
// /VARIABILI

// Scrivo un alert che mi espone 5 numeri casuali
for(var i=0; i<5; i++){

    // assicurarti che i numeri non siano duplicati
    var number = getRandomNumber(1, 100);

    alert (number);
    numeriCasuali.push(number);
}

console.log("Numeri Casuali", numeriCasuali);

setTimeout(function() {
for(var i = 0; i < numeriCasuali.length; i++){
    var n = chiediNumero(); 
    listaUtente.push(n);
} 3000;
})
console.log("Inseriti dall'utente", listaUtente);

