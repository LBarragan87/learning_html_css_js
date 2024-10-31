/* 
Declarar la función obtenerFecha(), la cual debe obtener la fecha actual en formato DD/MM/YYYY (utilizar la función toLocaleDateString('es-ES') del objeto Date) y retornarla para que la función mostrarFecha la utilice.
*/

function mostrarFecha() {
  alert(obtenerFecha());
  return obtenerFecha();
}
function obtenerFecha() {
  let today = new Date();
  let today_fomat = today.toLocaleDateString("es-ES");
  return today_fomat;
}

console.log(mostrarFecha());
