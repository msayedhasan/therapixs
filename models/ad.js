const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adSchema = new Schema({
  discount: {
    type: Schema.Types.ObjectId,
    ref: "Discount",
    default: undefined,
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
