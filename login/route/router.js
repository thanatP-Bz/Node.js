const express = require("express");
const router = express.Router();
const { createName } = require("../controllers/controllers");

router.route("/create").post(createName);

module.exports = router;
