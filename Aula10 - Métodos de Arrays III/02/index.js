const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const maiorString = cidades.reduce((acumulador, atual) => {
    return atual.length > acumulador.length ? atual : acumulador;
});

console.log(maiorString);