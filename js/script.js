// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// FUNZIONI COMUNI
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

// /FUNZIONI COMUNI 

// VARIABILI
var numeriCasuali = [];
console.log("Numeri Casuali", numeriCasuali);
// /VARIABILI
// Scrivo un alert che mi espone 5 numeri casuali
for(var i=0; i<5; i++){
    alert (getRandomNumber(1, 100));
    numeriCasuali.push(getRandomNumber(1, 100));
}