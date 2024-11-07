let encabezado = "registro Vehiculos";
let vehiculos_registrados = [];
// variables de automatizacion
function Vehiculo(marca, modelo, color, anio, titular, costo, velocidad_max) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
    this.costo = costo;
    this.velocidad_max = velocidad_max;
}

// inicia codigo de pagina
function array_parametros() {
    let vehiculo_prueba = new Vehiculo();
    let lista = [];
    for (let key in vehiculo_prueba) {
        lista.push(key);
    }
    return lista;
}

function titulo() {
    let obj_titulo = document.getElementById("titulo");
    obj_titulo.textContent = encabezado;
}

titulo();

function botones() {
    // objeto id de area_botones
    let obj_botones = document.getElementById("area_botones");

    //crear inputs
    for (let input of array_parametros()) {
        create_div = document.createElement("div");
        create_div.class = "parametros";

        create_label = document.createElement("label");
        create_label.className = "Label_parametro_vehiculo";
        create_label.htmlFor = `input_${input}`;
        //create_label.htmlFor = `input_${key}`;

        create_input = document.createElement("input");
        create_input.className = "input_parametro_vehiculo";
        create_input.id = `input_${input}`;

        if (input == "anio") {
            create_label.innerText = "año: ";
            create_input.innerText = "Ingrese Año: ";
            create_input.placeholder = "Ingrese Año: ";
        } else {
            create_label.innerText = `${input}: `;
            create_input.innerText = `Ingrese ${input}: `;
            create_input.placeholder = `Ingrese ${input}: `;
        }
        obj_botones.appendChild(create_div);
        create_div.appendChild(create_label);
        create_div.appendChild(document.createElement("br"));
        create_div.appendChild(create_input);
    }

    // crear boton
    let registrar = document.createElement("button");
    registrar.innerText = "Registrar Vehiculo";
    registrar.onclick = RegistrarVehiculo;

    obj_botones.appendChild(registrar);
}

botones();

function RegistrarVehiculo() {
    let new_vehiculo = new Vehiculo();
    for (let input of array_parametros()) {
        let obj_input = document.getElementById(`input_${input}`);
        new_vehiculo[input] = obj_input.value;
        obj_input.value = "";
    }

    vehiculos_registrados.push(new_vehiculo);
}
