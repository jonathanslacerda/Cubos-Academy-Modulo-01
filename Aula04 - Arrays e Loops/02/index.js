const letras = ["A", "a", "B", "C", "E", "e"];

let somaLetras = 0;

for (let letra of letras) {
    if (letra === "E" || letra === "e") {
        somaLetras += 1
    }
}

console.log(`Foram encontradas ${somaLetras} E ou e`);