let socket = new WebSocket(`ws://localhost:8080`);

let obj_mensajeIngresado = document.getElementById("mensajeIngresado");
let obj_botonEnviar = document.getElementById("botonEnviar");

function mostrarMensajes(contenido) {
    let obj_mensajeChat = document.getElementById("mensajeChat");
    let elemento_mensaje = document.createElement("p");
    elemento_mensaje.innerHTML(contenido);
    obj_mensajeChat.appendChild(elemento_mensaje);
}

obj_botonEnviar.onclick = function () {
    let mensaje = obj_mensajeIngresado.value;
    mostrarMensajes(mensaje);
    socket.send(mensaje);
};

socket.onmessage = function (event) {
    let mensaje = event.data;
    mostrarMensajes(mensaje);
};
