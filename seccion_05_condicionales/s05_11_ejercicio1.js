/*
Dado el array frutas, programe la función calcular, la cual utilizando un switch y el parámetro fruta, asigne a la variable precio los siguientes valores según corresponda:

Manzana: 15

Naranja: 20

Banana: 25
*/
let precio = 0;
let frutas = ["manzana", "naranja", "banana"];

function calcular(fruta) {
  switch (fruta) {
    case "manzana":
      precio = 15;
      break;
    case "naranja":
      precio = 20;
      break;
    case "banana":
      precio = 25;
      break;
    default:
      break;
  }
  return precio;
}
console.log(calcular("manzana"));
console.log(calcular("naranja"));
console.log(calcular("banana"));
