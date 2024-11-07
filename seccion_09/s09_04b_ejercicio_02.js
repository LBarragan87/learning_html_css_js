function Cancion(nombre, autor, album) {
    this.nombre = nombre;
    this.autor = autor;
    this.album = album;
}

Cancion.prototype.stop = function () {
    console.log(`${this.nombre} en pausa`);
};

let cancion1 = new Cancion("Take on Me", "a-ha", "Hunting High and Low");

cancion1.stop();
