function test() {
    for (let element of vehiculos_registrados) {
        console.log(element);
    }
}

function boton_mostrar_vehiculos() {
    // objeto id de area_botones
    let obj_vehiculos = document.getElementById("vehiculos");

    // crear boton
    let ver_vehiculos = document.createElement("button");
    ver_vehiculos.innerText = "Ver Vehiculos";
    ver_vehiculos.onclick = ver_vehiculos_registrados;

    //crear area de muestra de vehiculos
    crear_div = document.createElement("div");
    //crear_div.id = "Vehiculos_Registrados";
    obj_vehiculos.appendChild(ver_vehiculos);
    obj_vehiculos;
}

boton_mostrar_vehiculos();

function ver_vehiculos_registrados() {
    let obj_vehiculos = document.getElementById("vehiculos");

    for (let element of vehiculos_registrados) {
        let vehiculo = "";
        for (let value in element) {
            dato_vehiculo = `${value}: ${element[value]}`;
            vehiculo = `${vehiculo} ${dato_vehiculo}`;
        }

        //crear elemento en area de vehiculos
        let detalle_vehiculo_p = document.createElement("p");
        detalle_vehiculo_p.innerText = vehiculo;

        obj_vehiculos.appendChild(detalle_vehiculo_p);
    }
}
