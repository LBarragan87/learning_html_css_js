function valor_numero_fruta() {
  let numero_fruta = String(document.getElementById("numero_fruta").value);

  switch (numero_fruta) {
    case "1":
      set_precio("manzana - $10.00");
      break;
    case "2":
      set_precio("naranja - $20.00");
      break;
    case "3":
      set_precio("banana - $30.00");
      break;
    case "4":
      set_precio("pera - $40.00");
      break;
    case "5":
      set_precio("sandia - $50.00");
      break;
  }
}

function set_precio(valor) {
  document.getElementById("precio").textContent = valor;
}
