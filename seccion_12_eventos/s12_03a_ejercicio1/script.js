// Dado el código HTML proporcionado, programar la función agregarEvento() del archivo index.js, que agregue un evento keypress al input miInput. Al disparar el evento, deberá imprimir en consola el código de la tecla presionada utilizando el elemento key de la variable event.

function agregarEvento() {
    let obj_miInput = document.getElementById("miInput");
    obj_miInput.addEventListener("keypress", function (event) {
        console.log(event.key);
    });
}

agregarEvento();
