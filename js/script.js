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

function isInArray(element, array){
    for (var i = 0; i < array.length; i++){
        if (element == array [i]){
            return true;
        }
    }
    return false;
}

// /FUNZIONI COMUNI 

// VARIABILI
var numeroUtente;
var numeriCasuali = [];
var listaUtente = [];
var indovinati = [];
// /VARIABILI

// Scrivo un alert che mi espone 5 numeri casuali
for(var i=0; i<5; i++){

    var number = getRandomNumber(1, 100);

    alert (number);
    numeriCasuali.push(number);
}
console.log("Numeri Casuali", numeriCasuali);

setTimeout(function() {
for(var i = 0; i < numeriCasuali.length; i++){
    var n = chiediNumero(); 
    listaUtente.push(n);
} 30000;
})
console.log("Inseriti dall'utente", listaUtente);

var array = false; //Variabile booleana di riferimento
for(var i = 0; i < numeriCasuali.length; i++){
var numeroInserito = n;

    if(isInArray(n, listaUtente)){
    array == true;
    alert ("Il numero è gia presente");

} else if(isInArray(n, numeriCasuali)){
    indovinati.push(numeroUtente);
    console.log("Hai una buona memoria, hai indovinato " + numeroUtente);
// } else{
//     console.log("Il numero inserito non è corretto");
// }
}}
