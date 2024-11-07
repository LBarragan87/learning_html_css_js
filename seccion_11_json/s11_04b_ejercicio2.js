let nombre;
let calle;
let ciudad;
let cantEstudiantes;
let estudiantes;

function obtenerDatos() {
    fetch("datos.json")
        .then((respuesta) => respuesta.json())
        .then(function (salida) {
            nombre = salida.nombre;
            calle = salida.direccion.calle;
            ciudad = salida.direccion.ciudad;
            cantEstudiantes = salida.cantEstudiantes;
            estudiantes = salida.estudiantes;
        })
        .catch(function (error) {
            alert(error);
        });
}
