//console.log('Ciao mondo');
//console.log('jQuery', jQuery);
// simon says
// un alert espone 5 numeri casuali da li parte in timer di 30 sec
// dopp 30 sec l'utente deve inserire un prompt alla votla i nuemri che visto prima
// dopo che sono stati inseririti i 5 numeri ,il sof deci quali e quanti dei numeri indovinare sono stati indovinati

// Setup 
var totNumeri = 5;
var attesa = 3000;
var randomNumbers = [];

// Gen 5 muneri rand univoci
// con il while
while(randomNumbers.length < totNumeri) {
    var newNumber= getRandomNumber(1,100);
    
    // decisione .includes(cosa deve cercare)
    if( ! randomNumbers.includes(newNumber) ) {
        // inserisci nell'array
        randomNumbers.push(newNumber);
    }
}
// mosta i numeri all'utente
alert(randomNumbers);
console.log(randomNumbers);


/**
 * gioco logico
 * 
 */
setTimeout(function() {
    // richiesta dei 5 numeri
    var userNumbers = [];
    while(userNumbers.length < totNumeri) {
        var newUserNumber = parseInt( prompt('Inserisci il ' + (userNumbers.length + 1 ) + " ' numero") );
        while(isNaN(newUserNumber)) {
            newUserNumber = parseInt( prompt('Numero non corretto, inserisci il ' + (userNumbers.length + 1) + " ' numero") );
        }

        // controllo numero che esso sia unico 
        if(! userNumbers.includes(newUserNumber)) {
            userNumbers.push(newUserNumber);
        } else {
            alert('Numero già dichiarato');
        }
    }

    // collezione numeri giusti (cerca la corrispondenza)
    var rightGuesses = [];
    for(var i = 0; i < userNumbers.length; i++) {
        // singolo elemento
        userNumbers[i];
        // qual'è il numero att
        if( randomNumbers.includes(userNumbers[i])) {
           rightGuesses.push(userNumbers[i]);
        }
    }

    // risultati
    alert('RISULTATI' +
        '\n\nLista proprosta:\n' + randomNumbers +
        '\n\nLista utente:\n' + userNumbers +
        '\n\nIndovinati ' + rightGuesses.length + 'Numeri\n' + rightGuesses);

},attesa);







/*********************
 * funzioni 
 * **************************************** */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
}