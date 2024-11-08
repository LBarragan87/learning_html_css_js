let obj_mi_campo = document.getElementById("mi_campo");

function verificarNumero(event) {
    console.log(event.keyCode);
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault();
    }
}

obj_mi_campo.addEventListener("keydown", verificarNumero);

obj_mi_campo.addEventListener("keyup", function (event) {
    console.log(`entrada del usuario: ${event.target.value}`);
});

obj_mi_campo.addEventListener("keypress", function (event) {
    console.log("caracter ingreado: " + event.key);
});
