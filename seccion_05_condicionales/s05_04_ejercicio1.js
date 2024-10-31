/*
Implementar la función validar, para que valide si la edad pasada como parámetro esta entre 10 y 15 años. Guardar el resultado en la variable bool
*/
let bool;

function validar(edad) {
  bool = edad >= 10 && edad <= 15;
  console.log(bool);
  return bool;
}

validar(9);
validar(10);
validar(15);
validar(16);
