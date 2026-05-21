var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashboardController");

router.post("/receberResultados", function (req, res) {
    dashController.receberResultados(req, res);
});

module.exports = router;