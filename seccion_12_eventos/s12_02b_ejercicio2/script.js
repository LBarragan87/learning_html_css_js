//Dado el código HTML proporcionado, programar la función agregarEvento() del archivo script.js, que agregue un evento click al enlace miLink. Al dispararse el evento, se debe cancelar la funcionalidad asociada utilizando la variable event y la función preventDefault.

function agregarEvento() {
    let obj_miLink = document.getElementById("miLink");
    obj_miLink.addEventListener("click", preventing);
}
agregarEvento();

function preventing(event) {
    event.preventDefault();
}
