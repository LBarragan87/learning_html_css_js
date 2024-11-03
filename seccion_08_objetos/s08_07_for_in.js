function perro(nombre, raza, edad, color) {
  this.nombre = nombre;
  this.raza = raza;
  this.edad = edad;
  this.color = color;
}

let kira = new perro("kira", "meztiza", 9, "blanca con cafe");

function datos_kira() {
  for (let key in kira) {
    console.log(`${key}: ${kira[key]}`);
  }
}

datos_kira();
