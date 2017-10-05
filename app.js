  function isValidCard() {
  //preguntar por el numero de la tarjeta
 var numerotarjeta = prompt("ingresa el numero de tu tarjeta")
 //pasar los numeros a un string
 var cadena = numerotarjeta.toString();
 var index = cadena.length;
 var suma=0;
 for (var i=0; i < index; i+=2){
   cifra = parseInt(cadena.charAt(i))*2;
   if (cifra > 9){ 
     cifracad = cifra.toString();
     cifra = parseInt(cifracad.charAt(0)) + 
parseInt(cifracad.charAt(1));
   }
   suma+=cifra; 
 }
 for (var i=1; i < index; i+=2){
   suma += parseInt(cadena.charAt(i));
 }
  
 if ((suma % 10) == 0){ 
  alert("Numero de tarjeta correcto");
 } else {
  alert("El numero de tarjeta no es valido");
 }
}
  isValidCard(); 

  /*function isValidCard() {
 var numerotarjeta = prompt("ingresa el numero de tu tarjeta")
 var cadena = numerotarjeta.toString();
 var longitud = cadena.length;
 var cifra = null;
 var cifracad=null;
 var suma=0;
 for (var i=0; i < longitud; i+=2){
   cifra = parseInt(cadena.charAt(i))*2;
   if (cifra > 9){ 
     cifracad = cifra.toString();
     cifra = parseInt(cifracad.charAt(0)) + 
parseInt(cifracad.charAt(1));
   }
   suma+=cifra;
 }
 for (var i=1; i < longitud; i+=2){
   suma += parseInt(cadena.charAt(i));
 }
  
 if ((suma % 10) == 0){ 
  alert("Numero de tarjeta correcto");
 } else {
  alert("El numero de tarjeta no es valido");
 }
}
  isValidCard(); */