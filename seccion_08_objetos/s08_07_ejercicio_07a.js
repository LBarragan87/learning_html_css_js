/*
Implementar la función mostrarInfo(), que utilizando un Loop For In, debe imprimir en consola las propiedades/atributos del objeto automovil con el siguiente formato:

marca: Ford

modelo: Fiesta

anio: 2015
*/
let automovil = {
  marca: "Ford",
  modelo: "Fiesta",
  anio: 2015,
};

function mostrarInfo() {
  for (let key in automovil) {
    console.log(`${key}: ${automovil[key]}`);
  }
}
mostrarInfo();
