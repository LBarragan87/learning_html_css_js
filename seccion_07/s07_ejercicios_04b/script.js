function generarContenido() {
  let obj_contenido = document.getElementById("contenido");

  let create_label = document.createElement("label");
  create_label.innerText = "Label 1";
  create_label.htmlFor = "txtInput";

  let create_input = document.createElement("input");
  create_input.id = "txtInput";
  create_input.type = "number";
  create_input.value = 0;

  obj_contenido.appendChild(create_label);
  obj_contenido.appendChild(create_input);
}

generarContenido();
