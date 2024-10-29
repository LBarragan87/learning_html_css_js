/*

Muestre en un alert, la fecha del dia de hoy con el formato DD/MM/YYYY. Para ello debe usar la función toLocaleDateString('es-ES') que proporciona el objeto Date.

*/

let this_date = new Date();
function mostrarFecha() {
  alert(this_date.toLocaleDateString("es-ES"));
}
