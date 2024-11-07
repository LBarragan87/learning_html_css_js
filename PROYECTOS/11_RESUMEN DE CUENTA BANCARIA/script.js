function datos_cuervanco() {
    let obj_banco = document.getElementById("banco");
    let obj_sucursal = document.getElementById("sucursal");
    let obj_titular = document.getElementById("titular");
    let obj_num_cuenta = document.getElementById("num_cuenta");
    let obj_monto_1 = document.getElementById("monto_1");
    let obj_monto_2 = document.getElementById("monto_2");
    let obj_cbu = document.getElementById("cbu");
    let obj_abierto = document.getElementById("abierto");
    console.log(obj_banco);
    let datosJson;
    fetch("datos.json")
        .then((res) => res.json())
        .then((salida) => {
            datosJson = salida;

            obj_banco.textContent = datosJson.banco;
            obj_sucursal.textContent = datosJson.sucursal;
            obj_titular.textContent = datosJson.titular;
            obj_num_cuenta.textContent = datosJson.nro_cuenta;
            obj_monto_1.textContent = `${datosJson.saldo[0].monto} - ${datosJson.saldo[0].moneda}`;
            obj_monto_2.textContent = `${datosJson.saldo[1].monto} - ${datosJson.saldo[1].moneda}`;
            obj_cbu.textContent = datosJson.cbu;
            obj_abierto.textContent = datosJson.abierto;
        })
        .catch(function (error) {
            alert(error);
        });
}

datos_cuervanco();
