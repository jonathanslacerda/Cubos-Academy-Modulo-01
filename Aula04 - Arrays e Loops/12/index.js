const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];



for (let index = 0; index < 5; index++) {
    if (filaDeDentro.length < 5) {
        filaDeDentro.push(filaDeFora.shift());
    }
}

console.log(filaDeDentro);
console.log(filaDeFora);