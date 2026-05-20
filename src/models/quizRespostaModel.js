var database = require("../database/config");
function buscarResultado(idUsuario) {

    console.log(">> Buscando resultado do quiz do usuário: ", idUsuario);

    // rq = apelido de resultado_quiz  (igual avisoModel usa "a" pra aviso)
    // p  = apelido de personagem
    // pe = apelido de personalidade
    // ORDER BY data_resultado DESC → o mais recente primeiro
    // LIMIT 1                      → pega só esse primeiro (o mais recente)
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
    buscarResultado
};