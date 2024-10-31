/*
Programa la función mostrar, en donde según el parámetro opcion (cuyo valor es de tipo número) muestre un mensaje en un alert de la siguiente forma:

Si el parámetro opcion es igual a 1 mostrar "Buenos días"

Si el parámetro opcion es igual a 2 mostrar "Buenas tardes"

Si el parámetro opcion es igual a 3 mostrar "Buenas noches"
*/
function mostrar(opcion) {
  let resultado;
  switch (opcion) {
    case 1:
      resultado = "Buenos días";
      break;
    case 2:
      resultado = "Buenas tardes";
      break;
    case 3:
      resultado = "Buenas noches";
      break;

    default:
      break;
  }
  console.log(resultado);
  return resultado;
  alert(resultado);
}

mostrar(1);
mostrar(2);
mostrar(3);
