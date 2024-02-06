const jogada1 = "tesoura"
const jogada2 = "papel"

//seu código aqui
if (jogada1 === jogada2) {
    console.log("Empate")
} else if (jogada1 === "pedra" && jogada2 === "tesoura" || jogada1 === "tesoura" && jogada2 === "pedra") {
    console.log("Pedra")
} else if (jogada1 === "tesoura" && jogada2 === "papel" || jogada1 === "papel" && jogada2 === "tesoura") {
    console.log("Tesoura")
} else if (jogada1 === "pedra" && jogada2 === "papel" || jogada1 === "papel" && jogada2 === "pedra") {
    console.log("Papel")
};
