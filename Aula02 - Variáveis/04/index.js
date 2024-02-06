let capital = 1000;
let taxaJuros = 0.125;
let periodoTempo = 5;

let montante = capital*(1 + taxaJuros)**periodoTempo;

console.log(Math.round(montante));