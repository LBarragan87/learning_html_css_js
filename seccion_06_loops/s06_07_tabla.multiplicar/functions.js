function tabla_multiplicar() {
  //obtener numero base
  let base = +document.getElementById("numero_base").value;
  let mi_tabla = document.getElementById("tabla");
  //genera tabla base * 1 a 10
  for (let x = 1; x <= 10; x++) {
    this_row = `${base} * ${x} = ${base * x}`;
    let item_p = document.createElement("p");
    item_p.innerText = this_row;
    item_p.className = `valor_${x}`;
    mi_tabla.appendChild(item_p);
  }
}
