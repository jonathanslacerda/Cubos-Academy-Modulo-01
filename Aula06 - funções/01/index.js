const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};


let numeroAcertos = 0;
let nota = numeroAcertos * 2;

function corrigirProva (prova) {
    for (let index = 0; index < prova.questoes.length; index++) {
        if (prova.questoes[index].resposta === prova.questoes[index].correta) {
            numeroAcertos += 1
        }
    }
    let nota = numeroAcertos * 2;
    console.log(`O aluno(a) ${prova.aluno} acertou ${numeroAcertos} questões e obteve nota ${nota}`);
};

corrigirProva(prova);