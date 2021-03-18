const mongoose = require("mongoose");

const recordsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    time: { type: Number, required: true },
    moves: { type: Number, required: true },
  },
  { collection: "records" }
);

module.exports = mongoose.model("records", recordsSchema);
