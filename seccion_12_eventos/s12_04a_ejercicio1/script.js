// Dado el código HTML proporcionado, programar la función agregarEvento() del archivo index.js, que agregue un evento mouseover al boton miBoton. Al disparar el evento, deberá imprimir en consola el mensaje: Mouse sobre botón

function agregarEvento() {
    let obj_miBoton = document.getElementById("miBoton");
    obj_miBoton.addEventListener("mouseover", function () {
        console.log("Mouse sobre botón");
    });
}

agregarEvento();
