function AutoTemplete(marca, modelo, año, titular) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.titular = titular;
}

AutoTemplete.prototype.Vender_Vehiculo = function (nuevo_titular) {
    this.titular = nuevo_titular;
};

AutoTemplete.prototype.Encender_Vehiculo = function () {
    alert("El vehiculo se ha ensendido");
};

let automovil1 = new AutoTemplete("ford", "focus", 2015, "jose matias");
let automovil2 = new AutoTemplete("ford", "fiesta", 2005, "jose perez");
let automovil3 = new AutoTemplete("nisan", "versa", 2023, "martin martinez");

let vehiculos = [automovil1, automovil2, automovil3];

function mostrar_automoviles() {
    let obj_lista_automoviles = document.getElementById("lista_automoviles");
    console.log(obj_lista_automoviles);

    for (let vehiculo of vehiculos) {
        let crear_info_vehiculo = document.createElement("p");
        crear_info_vehiculo.className = "elemento_vehiculo";
        crear_info_vehiculo.innerText = `${vehiculo.marca} ${vehiculo.modelo} - ${vehiculo.año} - ${vehiculo.titular}`;
        //console.log(vehiculo);

        obj_lista_automoviles.appendChild(crear_info_vehiculo);
    }
}
