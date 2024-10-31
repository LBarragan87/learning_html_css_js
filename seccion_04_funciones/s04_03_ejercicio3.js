/*
Escribir el código necesario para hacer que la funcion sumar() resuelva la siguiente suma (15 + 19) y retorne el resultado de la misma, para que sea utilizada por la función mostrarResultado().
*/

function mostrarResultado() {
  let resultado = sumar();
  alert(resultado);
  return resultado;
}

function sumar() {
  return 15 + 19;
}

console.log(mostrarResultado());
