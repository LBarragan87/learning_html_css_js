let sumaTotal = 0;

function automatizarSuma() {
  let obj_contenido = document.getElementById("contenido");
  let obj_contenido_child = obj_contenido.children;
  for (let child of obj_contenido_child) {
    sumaTotal += +child.children[0].value;
  }
  console.log(sumaTotal);
}

automatizarSuma();
