function CalcularCombustible() {
  let kilometros = +document.getElementById("kilometros").value;
  let rendimiento = +document.getElementById("rendimiento").value;
  let resultado = document.getElementById("resultado");
  let combustible = combustible_requerido(kilometros, rendimiento);
  resultado.textContent = `Se requieren ${combustible}L`;
}

function combustible_requerido(kilometros, rendimiento) {
  return (kilometros / rendimiento).toFixed(2);
}
