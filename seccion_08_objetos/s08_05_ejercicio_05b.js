//Crea un constructor para el objeto Polo con parámetros para definir los atributos: marca, color y talle.

function Polo(marca, color, talle) {
  this.marca = marca;
  this.color = color;
  this.talle = talle;
}

let mi_polo = new Polo("nkny", "azul", "EG");

console.log(mi_polo.marca);
console.log(mi_polo.color);
console.log(mi_polo.talle);
