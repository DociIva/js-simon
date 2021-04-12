//console.log('Ciao mondo');
//console.log('jQuery', jQuery);
$(document).ready(function(){
    var numeri = [];

    var contatore = 0;

    var contenuto = 5;

    while(contatore < contenuto) {
      var numero = Math.floor(Math.random() * 50) +1;
      numeri.push(numero);
      contatore++;
     
     alert('Ricorda questi numeri ' + (numeri));


    

    }

}); 
