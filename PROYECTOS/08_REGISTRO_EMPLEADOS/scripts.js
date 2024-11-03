let lista_empleados = [];

function Empleado(
  numero_empleado,
  nombre,
  apellido,
  fecha_nacimiento,
  cargo,
  ingreso,
  telefono
) {
  this.numero_empleado = numero_empleado;
  this.nombre = nombre;
  this.apellido = apellido;
  this.fecha_nacimiento = fecha_nacimiento;
  this.cargo = cargo;
  this.ingreso = ingreso;
  this.telefono = telefono;
}

function lista_parametros_by_obj() {
  let mi_lista = [];
  let empleado_temporal = new Empleado();
  for (let key in empleado_temporal) {
    mi_lista.push(key);
  }
  return mi_lista;
}

let lista_parametros = lista_parametros_by_obj();

function crear_inputs() {
  let obj_area_registro = document.getElementById("area_registro");
  for (let parametro of lista_parametros) {
    //creando p
    let create_p = document.createElement("p");
    create_p.className = "parametros_registro";

    //creando label
    let create_label = document.createElement("label");
    create_label.id = `${parametro}_p`;
    create_label.innerText = `${parametro}: `;
    create_label.className = "titulo_input";

    //creando input
    let create_input = document.createElement("input");
    create_input.id = `${parametro}_in`;
    create_input.className = "inputs_registro";
    create_input.placeholder = `ingresar ${parametro}`.toUpperCase();
    //agregando a HTML
    obj_area_registro.appendChild(create_p);
    create_p.appendChild(create_label);
    create_p.append(document.createElement("br"));
    create_p.appendChild(create_input);
  }
}

function cargar_empleado() {
  let nuevo_empleado = new Empleado(
    document.getElementById("numero_empleado_in").value,
    document.getElementById("nombre_in").value,
    document.getElementById("apellido_in").value,
    document.getElementById("fecha_nacimiento_in").value,
    document.getElementById("cargo_in").value,
    document.getElementById("ingreso_in").value,
    document.getElementById("telefono_in").value
  );

  lista_empleados.push(nuevo_empleado);
}

function limpiar_campos() {
  console.log("limpiando parametros");
  document.getElementById("numero_empleado_in").value = "";
  document.getElementById("nombre_in").value = "";
  document.getElementById("apellido_in").value = "";
  document.getElementById("fecha_nacimiento_in").value = "";
  document.getElementById("cargo_in").value = "";
  document.getElementById("ingreso_in").value = "";
  document.getElementById("telefono_in").value = "";
}

function mostrar_empleados() {
  let obj_lista_empleados = document.getElementById("lista_empleados");

  for (let empleado of lista_empleados) {
    //creando div por empleado;
    let create_div = document.createElement("div");
    create_div.className = "Cada_empleado";
    // agregando div a HTML
    obj_lista_empleados.appendChild(create_div);

    let create_name = document.createElement("h2");
    create_name.className = "nombre_empleado";
    create_name.innerText = `${empleado.nombre} ${empleado.apellido}`;
    create_div.appendChild(create_name);

    for (let key in empleado) {
      let create_h3 = document.createElement("h3");
      create_h3.className = "empleado";
      create_h3.innerText = `${key}: ${empleado[key]}`;
      create_div.appendChild(create_h3);
    }
  }
}

crear_inputs();
