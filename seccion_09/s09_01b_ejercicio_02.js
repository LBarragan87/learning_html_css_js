let estudiante = {
  nombre: "luis",
  apellido: "barragan",
  legajo: "sabra dios que sea esto",
};

function prototipos() {
  let estudiante1 = Object.create(estudiante);
  console.log(estudiante1.__proto__);
}
