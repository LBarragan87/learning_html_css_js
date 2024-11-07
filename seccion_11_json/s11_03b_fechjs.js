let x;
let datosJson;
fetch("s11_01_json.json")
    .then((res) => res.json())
    .then((salida) => {
        datosJson = salida;

        x = datosJson;
        console.log(x.nombre);
        console.log(x.edad);
        console.log(x.esEstudiante);
        console.log(x.direccion);
        console.log(x.telefonos);
    });
