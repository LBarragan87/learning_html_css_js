// Dado el código HTML proporcionado, programar la función agregarEvento() del archivo index.js, que agregue un evento keydown al input miInput. Al disparar el evento, deberá validar que el usuario no pueda ingresar en el input la barra espaciadora si la presiona. El número key de la barra espaciadora es 32.
function agregarEvento() {
    let obj_miInput = document.getElementById("miInput");
    obj_miInput.addEventListener("keydown", validate);
}
agregarEvento();

function validate(event) {
    console.log(event.key);
    if (event.key === " ") {
        event.preventDefault();
    }
}
