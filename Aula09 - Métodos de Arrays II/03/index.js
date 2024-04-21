const palavras = ["arroz", "feijão", "carne", "refrigerante", "macarrão"];

const bebidaProibida = palavras.some((valor) => {
    return valor === "cerveja" || valor  === "vodka"
})

if (bebidaProibida) {
    console.log("Revise sua lista João, Possui bebida com venda proibida")
} else {
    console.log("Tudo certo, vamos as compras!")
}