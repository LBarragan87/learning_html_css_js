let sumaTotal = 0;

function automatizarSuma() {}

automatizarSuma();

function test() {
  let obj_txtInput1 = document.getElementById("contenido");
  let obj_txtInput1_p = obj_txtInput1.children;
  for (let p of obj_txtInput1_p) {
    sumaTotal += +p.children[1].value;
  }
  console.log(sumaTotal);
}

test();
