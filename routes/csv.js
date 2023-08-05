const express = require("express");
const csvController = require("../controllers/csvController");
const router = express.Router();

// call upload method for csv file upload
router.post("/upload", csvController.upload);

// Get details of CSV files
router.get("/detail/:id", csvController.detail);

module.exports = router;
