//En la función ya declarada, calcule el promedio de notas del array e imprima en consola el resultado del calculo realizado.

"use strict";
let notas = [6, 9, 7, 5, 1, 5, 4, 3];

function promedio() {
  let suma = 0;
  let cantidad = 0;
  for (let nota of notas) {
    suma += nota;
    cantidad++;
  }
  let promedio = suma / cantidad;
  console.log(promedio);
}
promedio();
