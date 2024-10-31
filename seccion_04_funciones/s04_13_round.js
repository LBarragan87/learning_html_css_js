let val1 = 1.55;
let val2 = 1;

let without_round = val1 / val2;
let normal_round = Math.round(val1 / val2); // redondea a enteros
let ceil_round = Math.ceil(val1 / val2); // redondeo hacia arriba
let floor_round = Math.floor(val1 / val2); // redondeo hacia abajo

console.log(without_round);
console.log(normal_round);
console.log(ceil_round);
console.log(floor_round);
