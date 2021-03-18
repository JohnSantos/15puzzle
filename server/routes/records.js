const express = require("express");
const router = express.Router();
const RecordsController = require("../controllers/records");

/* GET users listing. */
router.post("/", RecordsController.createRecord);
router.get("/highscore", RecordsController.getHighScore);
module.exports = router;
