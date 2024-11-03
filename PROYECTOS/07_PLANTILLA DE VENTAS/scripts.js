let cantidad_tiendas = 10;
let texto_labels = "ventas_tienda_";
let mayor;
let menor;

function extraerNumeroDesdeElemento(elemento) {
  //obtiene los montos de las ventas por su id
  let mi_elemento = document.getElementById(elemento);
  let mi_numero = +mi_elemento.value;
  return mi_numero;
}

function get_ventas() {
  //obtener las ventas de los inputs por su clase
  let lista_html_items = document.getElementsByClassName("inputs_ventas");
  let html_to_list = Array.from(lista_html_items);
  let lista_ventas = [];
  for (let html_item of html_to_list) {
    let elementosVentas = extraerNumeroDesdeElemento(html_item.id);
    lista_ventas.push(elementosVentas);
  }
  return lista_ventas;
}

function crear_parrafo_tienda() {
  let obj_inputs_tiendas = document.getElementById("inputs_tiendas");
  for (let n = 0; n < cantidad_tiendas; n++) {
    //generar parrafos
    let create_p = document.createElement("p");

    //generar labels
    let create_label = document.createElement("label");
    create_label.innerText = `tienda ${n + 1}: `;
    create_label.htmlFor = `${texto_labels}${n + 1}`;
    create_label.className = "labels";

    //generar inputs
    let create_input = document.createElement("input");
    create_input.id = `${texto_labels}${n + 1}`;
    create_input.className = "inputs_ventas";
    create_input.placeholder = "ingresar monto";

    //crear elementos en html
    obj_inputs_tiendas.appendChild(create_p);
    create_p.appendChild(create_label);
    create_p.appendChild(create_input);
  }
}

function calcular() {
  let suma = 0;
  let lista_ingreso_tiendas = document.getElementById("inputs_tiendas");
  let lista_ingreso_tiendas_children = lista_ingreso_tiendas.children;
  for (let ele of lista_ingreso_tiendas_children) {
    document.getElementById(ele.children[1].id).className = "inputs_ventas";
  }
  let lista_ventas = get_ventas();

  for (let venta of lista_ventas) {
    suma += venta;
  }
  mayor = +Math.max(...lista_ventas);
  menor = +Math.min(...lista_ventas);

  for (let element of lista_ingreso_tiendas_children) {
    let valor = +element.children[1].value;
    if (valor === mayor) {
      let obj_mayor = document.getElementById(element.children[1].id);
      obj_mayor.className = "mayor_venta";
    } else if (valor === menor) {
      let obj_menor = document.getElementById(element.children[1].id);
      obj_menor.className = "menor_venta";
    }
    let obj_parrafoSalida = document.getElementById("parrafoSalida");
    obj_parrafoSalida.textContent = `Venta Total = ${suma} / Mayor Venta = ${mayor} / Menor Venta = ${menor}`;
  }
}
