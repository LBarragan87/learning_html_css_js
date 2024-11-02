function generarContenido(numero) {
  let content = document.getElementById("contenido");

  let label = document.createElement("label");
  label.setAttribute("for", `txtInput${numero}`);
  label.innerText = `Label ${numero}`;

  let input = document.createElement("input");
  input.setAttribute("id", `txtInput${numero}`);
  input.setAttribute("type", "number");
  input.setAttribute("value", 0);

  content.appendChild(label);
  content.appendChild(input);

  return content;
}

generarContenido(5);
