let polo = {
  marca: "Lacoste",
  color: "Azul",
  talle: "L",
  fabricar() {
    console.log("Polo fabricado");
  },
};

polo.color = 85;
polo.botones = "negros";
console.log(polo);
console.log(polo.marca);
console.log(polo.color);
console.log(polo.talle);
console.log(polo.botones);
polo.fabricar();
