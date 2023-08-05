const mongoose = require("mongoose");
const multer = require("multer");
const upload = require("multer");
const path = require("path");

const CSV_PATH = path.join("/uploads");

const csvSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", CSV_PATH));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".csv");
  },
});

csvSchema.statics.csvUpload = multer({ storage: storage }).single("csv");

csvSchema.statics.csvPath = CSV_PATH;

const CSV = mongoose.model("CSV", csvSchema);

module.exports = CSV;
