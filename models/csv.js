const mongoose = require("mongoose");
const csvSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const CSV = mongoose.model("CSV", csvSchema);
module.exports = CSV;
