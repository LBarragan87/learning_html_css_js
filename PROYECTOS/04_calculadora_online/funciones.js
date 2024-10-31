function suma() {
  get_result(valor1() + valor2());
}

function resta() {
  get_result(valor1() - valor2());
}

function potencia() {
  get_result(Math.pow(valor1(), valor2()));
}

function absoluto() {
  get_result(Math.abs(valor2()));
}

function multiplicacion() {
  get_result(valor1() * valor2());
}

function division() {
  get_result(valor1() / valor2());
}

function raiz() {
  get_result(Math.sqrt(valor2()));
}

function random() {
  let rand = Math.random();
  let value = Math.round(rand * (valor1() - 1 - valor2()) + valor2());
  get_result(value);
}

function valor1() {
  return +document.getElementById("valor1").value;
}
function valor2() {
  return +document.getElementById("valor2").value;
}

function get_result(valor) {
  let resultado = document.getElementById("resultado");
  resultado.textContent = valor;
}
