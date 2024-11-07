//Dada la clase Ciudad, agregue los métodos get y set para las propiedades nombre, pais y cantHabitantes.
class Ciudad {
    constructor(nombre, pais, cantHabitantes) {
        this._nombre = nombre;
        this._pais = pais;
        this._cantHabitantes = cantHabitantes;
    }

    get nombre() {
        return this._nombre;
    }

    get pais() {
        return this._pais;
    }
    get cantHabitantes() {
        return this._cantHabitantes;
    }

    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }

    set pais(nuevo_pais) {
        this._pais = nuevo_pais;
    }

    set cantHabitantes(nuevo_cantHabitantes) {
        this._cantHabitantes = nuevo_cantHabitantes;
    }
}
