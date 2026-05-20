var database = require("../database/config");

function cadastrarQuiz(
    idUsuario,
    idQuiz,
    idPersonagem,
    idPersonalidade
) {
    console.log(">> Salvando resultado do quiz...");

    //autualizando resultado quiz e usuario para a pagina de resultado quiz
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

function buscarResultado(idUsuario) {

    console.log(">> Buscando resultado do quiz do usuário: ", idUsuario);
    var instrucaoSql = `
        SELECT
            rq.id_resultado,
            rq.data_resultado,
            p.nome  AS personagem,
            pe.nome AS personalidade,
            pe.descricao
        FROM resultado_quiz rq
             JOIN personagem p
                ON rq.fk_personagem = p.id_personagem
             JOIN personalidade pe
                ON rq.fk_personalidade = pe.id_personalidade
        WHERE rq.fk_usuario = ${idUsuario}
        ORDER BY rq.data_resultado DESC
        LIMIT 1;
    `;

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrarQuiz,
    buscarResultado
};