var quizModel = require("../models/quizModel");

function cadastrarQuiz(req, res) {

    // dados vindos do frontend
    var idUsuario = req.body.idUsuarioServer;
    var idQuiz = req.body.idQuizServer;
    var idPersonagem = req.body.personagemServer;
    var idPersonalidade = req.body.personalidadeServer;

    // validações básicas
    if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else if (idQuiz == undefined) {
        res.status(400).send("idQuiz está undefined!");
    } else if (idPersonagem == undefined) {
        res.status(400).send("idPersonagem está undefined!");
    } else if (idPersonalidade == undefined) {
        res.status(400).send("idPersonalidade está undefined!");
    }
    else {

        quizModel.cadastrarQuiz(
            idUsuario,
            idQuiz,
            idPersonagem,
            idPersonalidade,
        )
            .then(function (resultado) {
                console.log(resultado);
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao salvar o resultado do quiz: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    cadastrarQuiz
};