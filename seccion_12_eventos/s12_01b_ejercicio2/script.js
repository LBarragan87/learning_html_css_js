//Dado el código HTML proporcionado, programar la función agregarEvento() del archivo script.js, que agregue un evento click al boton miBoton. Al disparar el evento, deberá mostrar en un alerta el mensaje: Click realizado

let obj_miBoton = document.getElementById("miBoton");
obj_miBoton.addEventListener("click", agregarEvento);

function agregarEvento() {
    alert("Click realizado");
}
