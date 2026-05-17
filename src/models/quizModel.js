var database = require("../database/config");

function cadastrarQuiz(
    idUsuario,
    idQuiz,
    idPersonagem,
    idPersonalidade,
    pontuacaoTotal
) {
    console.log(">> Salvando resultado do quiz...");

    var instrucaoSql = `
        INSERT INTO resultado_quiz (
            fk_usuario,
            fk_quiz,
            fk_personagem,
            fk_personalidade
        ) VALUES (
            ${idUsuario},
            ${idQuiz},
            ${idPersonagem},
            ${idPersonalidade}
        );
    `;

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarQuiz
};