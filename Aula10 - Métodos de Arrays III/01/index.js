//Ordem Crescente
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

numeros.sort((a, b) => {
    return a-b
});

console.log(numeros);

//Ordem decrescente
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

numeros.sort((a, b) => {
    return b-a
});

console.log(numeros);


//Ordem crescente UNICODE
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

numeros.sort();

console.log(numeros);

//Ordem Alfabética
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

frutas.sort((a, b) => {
    return a.localeCompare(b)
});

console.log(frutas);


//Ordem alfabética decrescente
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

frutas.sort((a, b) => {
    return b.localeCompare(a)
});

console.log(frutas);


//Ordem crescente de número de caracteres
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

frutas.sort((a, b) => {
    return b.length - a.length
});

console.log(frutas);