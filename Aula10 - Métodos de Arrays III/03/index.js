const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNumero = numeros.reduce((acumulador, atual) => {
    return atual > acumulador ? atual : acumulador;
});

console.log(maiorNumero);