const express = require("express");
const router = express.Router();

const { analyze } = require("./controller");

router.post("/analyze", analyze);

module.exports = router;