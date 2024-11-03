let perro = {
  nombre: "simba",
  raza: "shih tzu",
  edad: 4,
  saludar() {
    console.log(`Hola, me llamo ${this.nombre}`);
  },
  ladrar() {
    console.log("guau");
  },
};

let perro2 = {
  nombre: "reina",
  raza: "caniche",
  edad: 15,
  saludar() {
    console.log(`Hola, me llamo ${this.nombre}`);
  },
  ladrar() {
    console.log("guau");
  },
};

perro.saludar();
perro2.saludar();
