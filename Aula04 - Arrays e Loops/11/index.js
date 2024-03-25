const original = [5, 7, 13, 17, 26, 34, 118, 245];

const novo = []

for (let numero of original) {
    if (numero >= 10 && numero <= 100) {
        novo.push(numero)
    }
} 

console.log(novo);
console.log(original);