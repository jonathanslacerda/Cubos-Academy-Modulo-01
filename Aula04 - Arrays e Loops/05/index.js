const original = [1, 4, 12, 21, 53, 88, 112];

const arrayPares = []

for (let numero of original) {
    if (numero % 2 === 0) {
        arrayPares.push(numero);
    }
}

console.log(arrayPares);
