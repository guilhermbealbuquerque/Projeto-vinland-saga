var express = require("express");
var router = express.Router();

var quizRespostaController = require("../controllers/quizRespostaController");

router.post("/salvarResultado", function(req, res) {
    quizRespostaController.cadastrarQuiz(req, res);
});

router.get("/resultado/:idUsuario", function(req, res) {
    quizRespostaController.buscarResultado(req, res);
});

module.exports = router;