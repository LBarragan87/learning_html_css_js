let obj_menu = document.getElementById("mi_menu");
let obj_boton_abrirMenu = document.getElementById("boton_abrirMenu");
let obj_boton_cerrarMenu = document.getElementById("boton_cerrarMenu");

/*
obj_boton_abrirMenu.addEventListener("click", function () {
    mi_menu.style.display = "block";
});

 obj_boton_cerrarMenu.addEventListener("click", function () {
     mi_menu.style.display = "none";

*/

obj_boton_abrirMenu.addEventListener("mouseover", function () {
    mi_menu.style.display = "block";
});

obj_boton_abrirMenu.addEventListener("mouseout", function () {
    mi_menu.style.display = "none";
});

document.addEventListener("mousemove", function (event) {
    console.log(`${event.clientX}, ${event.clientY}`);
});
