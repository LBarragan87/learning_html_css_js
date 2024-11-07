//Dada la clase Colegio, agregue los métodos get y set para las propiedades nombre, direccion y cantAlumnos.

class Colegio {
    constructor(nombre, direccion, cantAlumnos) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._cantAlumnos = cantAlumnos;
    }

    get nombre() {
        return this._nombre;
    }
    get direccion() {
        return this._direccion;
    }
    get cantAlumnos() {
        return this._cantAlumnos;
    }

    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }
    set direccion(nueva_direccion) {
        this._direccion = nueva_direccion;
    }
    set cantAlumnos(nueva_cant_alumnos) {
        this._cantAlumnos = nueva_cant_alumnos;
    }
}
