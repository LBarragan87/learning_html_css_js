/*
En base al ejercicio anterior, programe ahora la función calcular para definir la siguiente lógica.

Si la cantidad es mayor a 10, la variable precio debe ser igual a 50.

Si la cantidad es menor a 5, la variable precio debe ser igual a 100.

Entre 5 y 10, el precio debe ser igual a 80.
*/
let precio = 0;

function calcular(cantidad) {
  if (cantidad > 10) {
    precio = 50;
  } else if (cantidad < 5) {
    precio = 100;
  } else {
    precio = 80;
  }
  console.log(precio);
}

calcular(4);
calcular(5);
calcular(6);
calcular(7);
calcular(8);
calcular(9);
calcular(10);
calcular(11);
calcular(12);
calcular(13);
calcular(14);
