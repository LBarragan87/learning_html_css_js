function generarContenido() {
  let obj_contenido = document.getElementById("contenido");
  let p_create = document.createElement("p");
  p_create.innerText = "Parrafo 1";
  let input_create = document.createElement("input");
  input_create.id = "txtInput";
  input_create.type = "text";
  obj_contenido.appendChild(p_create);
  obj_contenido.appendChild(input_create);
}
