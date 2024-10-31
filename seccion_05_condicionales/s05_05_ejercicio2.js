/*
Implementar la función validar, que valide si la edad enviada por parámetro es igual a 10 o igual a 20. Guardar el resultado en la variable bool;
*/
let bool;

function validar(edad) {
  bool = edad == 10 || edad == 20;
  console.log(bool);
  return bool;
}

validar(10);
validar(11);
validar(19);
validar(20);
