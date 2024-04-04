const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

const arrayInvertido = frutas.reverse().join(", ");

frutas.splice(0, 1);
frutas.splice(frutas.length - 1, 1);
frutas.splice(frutas.length, 0, "Melão")

console.log(arrayInvertido);
console.log(frutas);