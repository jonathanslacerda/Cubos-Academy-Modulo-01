const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;

if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
    console.log("Acesso Negado")
} else if (ehEstudante || idade < 18 && idade > 12) {
    console.log("Entrada: R$ 10,00")
} else {
    console.log("Entrada; R$ 20,00")
};