const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: { type: String, default: undefined },
  updatedAt: { type: String, default: undefined },
});

module.exports = mongoose.model("Ad", adSchema);
