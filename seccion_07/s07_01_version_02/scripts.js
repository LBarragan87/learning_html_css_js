let ventas = [
  "ventas_tienda_1",
  "ventas_tienda_2",
  "ventas_tienda_3",
  "ventas_tienda_4",
  "ventas_tienda_5",
];

function montos_ventas(ventas) {
  let lista_ventas = [];
  for (let venta of ventas) {
    let elementosVentas = extraerNumeroDesdeElemento(venta);
    lista_ventas.unshift(elementosVentas);
  }

  return lista_ventas;
}

function extraerNumeroDesdeElemento(elemento) {
  let mi_elemento = document.getElementById(elemento);
  let miTexto = mi_elemento.value;
  let mi_numero = +miTexto;
  return mi_numero;
}

function calcular() {
  let suma = 0;
  let lista_ventas = montos_ventas(ventas);

  for (let venta of lista_ventas) {
    suma += venta;
  }
  let mayor = Math.max(...lista_ventas);
  let menor = Math.min(...lista_ventas);
  let obj_parrafoSalida = document.getElementById("parrafoSalida");
  obj_parrafoSalida.textContent = `Venta Total = ${suma} / Mayor Venta = ${mayor} / Menor Venta = ${menor}`;
}
