const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gainSchema = new Schema({
  store: {
    type: Schema.Types.ObjectId,
    ref: "Store",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  collectedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  collectedAt: { type: String, default: undefined },
});

module.exports = mongoose.model("Gain", gainSchema);
