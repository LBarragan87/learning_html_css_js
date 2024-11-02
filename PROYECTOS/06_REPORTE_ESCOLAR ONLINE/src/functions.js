"use strict";
let calificaciones = [8, 6, 7, 9];
let mis_alumnos = ["hugo", "paco", "luis"];
function fecha() {
  setInterval(fecha_interval, 1000);
}

function fecha_interval() {
  let this_date = new Date();
  let obj_fecha = document.getElementById("fecha");
  obj_fecha.textContent = this_date.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function lista_alumnos() {
  let obj_alumnos = document.getElementById("alumnos");
  for (let alumno of mis_alumnos) {
    let create_option = document.createElement("option");
    create_option.innerText = alumno;
    obj_alumnos.appendChild(create_option);
  }
}

function ver_calificaciones() {
  let obj_calificaciones = document.getElementById("calificaciones");
  for (let calificacion of calificaciones) {
    let create_calificacion = document.createElement("li");
    create_calificacion.innerText = calificacion;
    obj_calificaciones.appendChild(create_calificacion);
  }
}
function calcularPromedio() {
  let suma = 0;
  let periodos = 0;
  for (let calificacion of calificaciones) {
    suma += calificacion;
    periodos++;
  }
  console.log(suma);
  console.log(periodos);
  let promedio = (suma / periodos).toFixed(2);
  let obj_promedio = document.getElementById("promedio");
  obj_promedio.textContent = promedio;
}

function calcularMejorCalificacion() {
  let maximo = Math.max(...calificaciones);
  let obj_maximo = document.getElementById("mejor_nota");
  obj_maximo.textContent = maximo.toFixed(2);
  console.log(maximo);
}

function verificar_aplazos() {
  let aplazos = document.getElementById("aplazos");
  for (let calificacion of calificaciones) {
    if (calificacion < 6) {
      aplazos.textContent = "Si hubo Aplazos";
      aplazos.id = "aplazado";
      break;
    } else {
      aplazos.textContent = "no hubo Aplazos";
      aplazos.id = "aplazos";
    }
  }
}
