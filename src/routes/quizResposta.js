var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/quizRespostaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/cadastrarQuiz", function (req, res) {
    quizController.cadastrar(req, res);
})

module.exports = router;