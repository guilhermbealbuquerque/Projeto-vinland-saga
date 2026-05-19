var database = require("../database/config");

function autenticar(email, senha) {

    var instrucaoSql = `
        SELECT id_usuario, nome, email, fk_personagem, fk_personalidade
        FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha, fk_personagem, fk_personalidade) {

    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES
        ('${nome}', '${email}', '${senha}');
    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};