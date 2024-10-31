let seleccion_actual;

function peliculas_comedia() {
  seleccion_actual = "comedia";
  console.log(seleccion_actual);

  peliculas_recomendaciones(seleccion_actual);
}
function peliculas_drama() {
  seleccion_actual = "drama";
  console.log(seleccion_actual);

  peliculas_recomendaciones(seleccion_actual);
}
function peliculas_musical() {
  seleccion_actual = "musical";
  console.log(seleccion_actual);

  peliculas_recomendaciones(seleccion_actual);
}
function peliculas_crimen() {
  seleccion_actual = "crimen";
  console.log(seleccion_actual);
  peliculas_recomendaciones(seleccion_actual);
}

function get_edad() {
  let obj_recomendacines = document.getElementById("edad");
  return obj_recomendacines.value;
}

function peliculas_recomendaciones(genero) {
  let obj_recomendacines = document.getElementById("recomendacines");
  obj_recomendacines.textContent = `Estas son tus recomendaciones para genero ${seleccion_actual.toUpperCase()}`;
}
