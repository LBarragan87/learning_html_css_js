/*
Declara un temporizador que cumplidos los 10 segundos, muestre en un alert el mensaje "Se acabo el tiempo".



Aclaración: el objetivo de este ejercicio es practicar la parte JS del programa, por lo que no es necesario realizar la parte HTML.
*/
function temporizador() {
  setTimeout(timeAlert, 1000 * 10);
}
function timeAlert() {
  console.log("tiempo terminado");
}

temporizador();
