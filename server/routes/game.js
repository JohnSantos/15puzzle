const express = require("express");
const router = express.Router();
const GameController = require("../controllers/game");

/* GET users listing. */
router.get("/", GameController.gameStart);
module.exports = router;
