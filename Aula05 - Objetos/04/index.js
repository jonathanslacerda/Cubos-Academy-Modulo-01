const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];


for (let usuario of usuarios) {
    if(usuario.idade < 18) {
        usuario.maior_idade = false
    } else {
        usuario.maior_idade = true
    }
};

console.log(usuarios);