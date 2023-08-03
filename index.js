const express = require("express");
const db = require("./config/mongoose");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, (err) => {
  if (err) {
    return console.log("Error in running the server", err);
  }

  console.log(`Server is up and running on port ${PORT}`);
});
