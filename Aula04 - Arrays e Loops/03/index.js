const numeros = [54, 22, 14, 87, 10, 284];

for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] === 10) {
        console.log(index);
        break;
    }
};

console.log(-1);
