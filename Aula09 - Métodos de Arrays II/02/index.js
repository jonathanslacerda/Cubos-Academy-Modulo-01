const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const existePalavraInvalida = palavras.some((valor) => {
    return valor.length > 5;
});

if (existePalavraInvalida) {
    console.log("Existe palavra inválida")
} else {
    console.log("Array validado")
};