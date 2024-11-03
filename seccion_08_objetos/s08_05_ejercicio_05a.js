//Crea un constructor para el objeto Automovil con parámetros para definir los atributos: marca, modelo y anio.

function Automovil(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
}

let mi_auto = new Automovil("ford", "fiesta", 2008);
console.log(mi_auto.marca);
console.log(mi_auto.modelo);
console.log(mi_auto.anio);
