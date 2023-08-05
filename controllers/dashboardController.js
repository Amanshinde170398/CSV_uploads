const { render } = require("ejs");
const CSV = require("../models/csv");

module.exports.dasboard = async (req, res) => {
  const csvFiles = await CSV.find({});
  return res.render("dashboard", { csvFiles: csvFiles });
};
