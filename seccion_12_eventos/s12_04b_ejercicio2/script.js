// Dado el código HTML proporcionado, programar la función agregarEvento() del archivo index.js, que agregue un evento mouseout al boton miBoton. Al disparar el evento, deberá imprimir en consola el mensaje: Mouse por fuera de botón

function agregarEvento1() {
    let obj_miBoton = document.getElementById("miBoton");
    obj_miBoton.addEventListener("mouseout", function () {
        console.log("Mouse por fuera de botón");
    });
}

agregarEvento1();

function agregarEvento2() {
    let obj_miBoton = document.getElementById("miBoton");
    obj_miBoton.addEventListener("mouseover", function () {
        console.log("Mouse sobre botón");
    });
}

agregarEvento2();
