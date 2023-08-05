const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "./assets")));
app.use(express.urlencoded());
app.use("/", require("./routes"));

app.listen(PORT, (err) => {
  if (err) {
    return console.log("Error in running the server", err);
  }
  console.log(`Server is up and running on port ${PORT}`);
});
