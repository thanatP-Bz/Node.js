const express = require("express");
const router = express.Router();

const { login, dasboard } = require("../controllers/main");

router.route("/dasboard").get(dasboard);
router.route("/login").post(login);

module.exports = router;
