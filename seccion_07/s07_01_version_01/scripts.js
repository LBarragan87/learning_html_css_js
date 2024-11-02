function extraerNumeroDesdeElemento(elemento) {
  let mi_elemento = document.getElementById(elemento);
  let miTexto = mi_elemento.value;
  let mi_numero = +miTexto;
  return mi_numero;
}

function calcular() {
  let ventas = [
    "ventas_tienda_1",
    "ventas_tienda_2",
    "ventas_tienda_3",
    "ventas_tienda_4",
    "ventas_tienda_5",
  ];

  let suma = 0;
  for (let venta of ventas) {
    elementosVentas = extraerNumeroDesdeElemento(venta);
    console.log(elementosVentas);
    suma += elementosVentas;
  }
  obj_parrafoSalida = document.getElementById("parrafoSalida");
  obj_parrafoSalida.textContent = suma;
}
