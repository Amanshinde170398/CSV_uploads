const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const CSV = require("../models/csv");

// Upload CSV file and add details in db
module.exports.upload = async (req, res) => {
  CSV.csvUpload(req, res, function (err) {
    if (err) {
      console.log("******* Multer Error **********");
    }
    if (req.file) {
      const diskPath = CSV.csvPath + "/" + req.file.filename;
      CSV.create({ name: req.file.originalname, path: diskPath });
    }
  });
  return res.redirect("/");
};

// read file contains
module.exports.detail = async (req, res) => {
  const results = [];
  const file = await CSV.findById(req.params.id);
  await fs
    .createReadStream(path.join(__dirname, "..", file.path))
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      console.log(results);
      return res.render("csv_detail", { results: results });
    });
};
