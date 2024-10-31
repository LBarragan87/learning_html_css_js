/*
ingresa gratis si persona tiene 20 o 25 años
solo se puede ingresar si es mayor/igual a 18 y menor/igual a 30
*/

function alcohol(respuesta) {
  let respuesta_alcohol = document.getElementById("beber_alcohol");
  respuesta_alcohol.textContent = respuesta;
}

function ingresar(respuesta) {
  let respuesta_ingreso = document.getElementById("ingresar_fiesta");
  respuesta_ingreso.textContent = respuesta;
}

function gratis(respuesta) {
  let respuesta_gratis = document.getElementById("entrada_gratis");
  respuesta_gratis.textContent = respuesta;
}

function evaluar_edad() {
  let edad = +document.getElementById("edad").value;
  if (edad >= 18 && edad <= 30) {
    ingresar("Puede Ingresar");
  } else {
    ingresar("NO Puede Ingresar");
  }

  if (edad == 20 || edad == 25) {
    gratis("ENTRA GRATIS");
  } else if (edad >= 18 && edad <= 30) {
    gratis("PAGA POR ENTRAR");
  } else {
    gratis("NI PAGANDO PASAS");
  }
  if (edad >= 18) {
    alcohol("QUE COMIENCE LA FIESTA!");
  } else {
    alcohol("no puede beber alcohol");
  }
}
