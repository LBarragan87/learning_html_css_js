// Dado el código HTML proporcionado, programar la función agregarEvento() del archivo script.js, que agregue un evento click al boton miBoton. Al disparar el evento, deberá imprimir en consola el mensaje: Boton presionado

let obj_miBoton = document.getElementById("miBoton");
obj_miBoton.addEventListener("click", agregarEvento);

function agregarEvento() {
    console.log("Boton presionado");
}
