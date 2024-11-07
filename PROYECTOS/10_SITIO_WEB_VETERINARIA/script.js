class Animal {
    constructor(nombre, peso, edad) {
        this._nombre = nombre;
        this._peso = peso;
        this._edad = edad;
    }

    get edad() {
        return this._nombre;
    }

    get edad() {
        return this._peso;
    }

    get edad() {
        return this._edad;
    }

    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }

    set peso(nuevo_peso) {
        this._peso = nuevo_peso;
    }

    set edad(nueva_edad) {
        this._edad = nueva_edad;
    }
}

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad);
        this._raza = raza;
    }

    get raza() {
        return this._raza;
    }
    set raza(nueva_raza) {
        this._raza(nueva_raza);
    }
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this._sexo = sexo;
    }

    get sexo() {
        return this._sexo;
    }
    set sexo(nuevo_sexo) {
        this._sexo = nuevo_sexo;
    }
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this._color = color;
    }

    get color() {
        return this._color;
    }

    set color(nuevo_color) {
        this._color = nuevo_color;
    }
}

let perro1 = new Perro("kira", 7, 9, "cocker");
let gato1 = new Gato("abby", 3, 4, "hembra");
let conejo1 = new Conejo("botas", 2, 3, "negro");

let lista_mascotas = [perro1, gato1, conejo1];

function info_mascota(mascota) {
    let descripcion = "";
    for (let key in mascota) {
        descripcion = `${descripcion} ${key}: ${mascota[key]}, `;
    }
    return descripcion;
}

function ver_mascotas() {
    let obj_ul_mascotas = document.getElementById("ul_mascotas");
    for (let mascota of lista_mascotas) {
        //crear elemento lista
        let elemento_mascota = document.createElement("li");
        elemento_mascota.innerText = info_mascota(mascota);
        elemento_mascota.className = "Mascotas";

        //introducir en html
        obj_ul_mascotas.appendChild(elemento_mascota);
    }
}
