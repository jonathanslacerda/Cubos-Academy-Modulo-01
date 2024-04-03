const comentario = "Essa doença é muito perigoso!";


if (comentario.includes("COVID") || comentario.includes("pandemia")) {
    console.log("Comentário bloqueado por conter palavras proíbidas")
} else {
    console.log(comentario);
};

