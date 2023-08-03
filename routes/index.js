const express = require("express");
const router = express.Router();

router.use("/", require("./dashboard"));
router.use("/csv", require("./csv"));

module.exports = router;
