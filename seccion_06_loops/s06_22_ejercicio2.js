// Modifique el Loop For Of, dentro de la función testLoop, para que imprima en la consola el elemento del array solo si este es mayor a 5. Utilice la palabra clave continue

let miArray = [9, 5, 6, 2, 7];

function testLoop() {
  for (let numero of miArray) {
    if (numero > 5) {
      console.log(numero);
    } else {
      continue;
    }
  }
}

testLoop();
