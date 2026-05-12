var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarPersonalidade", function (req, res) {
    quizController.cadastrar(req, res);
})

router.post("/C", function (req, res) {
    quizController.autenticar(req, res);
});

module.exports = router;