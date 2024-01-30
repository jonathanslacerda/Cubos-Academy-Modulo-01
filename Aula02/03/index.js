let saldoMes = 80;
let precoTenis = 129.99;
let valorDesconto = precoTenis - saldoMes;

let percentualDesconto = (((saldoMes * 100) / precoTenis) - 100) * -1;

console.log(`O desconto necessário é de ${Math.round(percentualDesconto)}%`);