/*
Declara un temporizador que cumplidos los 5 segundos, muestre en un alert el mensaje "Se acabo el tiempo".



Aclaración: el objetivo de este ejercicio es practicar la parte JS del programa, por lo que no es necesario realizar la parte HTML.
*/
function temporizador() {
  let tiempo = 3;
  setTimeout(timeAlert, 1000 * tiempo);
}
function timeAlert() {
  console.log("tiempo terminado");
}

temporizador();
