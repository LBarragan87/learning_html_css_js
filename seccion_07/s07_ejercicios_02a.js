//Implementar la función obtenerUltimoNumero(), donde deberá imprimir en consola el ultimo registro del array ya declarado, utilizando uno de los métodos vistos.
"use strict";
let array = [6, 8, 4, 9, 1];

function obtenerUltimoNumero() {
  let ultimo_index = array.length - 1;
  console.log(array[ultimo_index]);
}

obtenerUltimoNumero();
