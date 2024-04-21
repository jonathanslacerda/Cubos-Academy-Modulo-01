const numeros = [0, 122, 4, 6, 8, 44];

const numerosPares = numeros.every((valor) => {
    return valor % 2 === 0;
});

if (numerosPares) {
    console.log("Array válido")
} else {
    console.log("Array inválido")
}