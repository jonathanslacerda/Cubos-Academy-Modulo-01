const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const arraysLetraA = []

for (let nome of nomes) {
    const inicial = nome[0]
    if (inicial === "A" || inicial === "a") {
        arraysLetraA.push(nome)
    }
};

console.log(arraysLetraA);

