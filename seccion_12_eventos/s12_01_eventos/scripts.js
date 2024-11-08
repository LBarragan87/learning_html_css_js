let boton = document.getElementById("miBoton");

function mostrarMensaje() {
    alert("el boton ha sido presionado");
}

function otroMensaje() {
    alert("Flotar");
}

boton.addEventListener("click", mostrarMensaje);

boton.addEventListener("mouseover", otroMensaje);
