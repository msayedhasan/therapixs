const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  locked: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  ownerHistory: [
    {
      from: String,
      store: {
        type: Schema.Types.ObjectId,
        ref: "Store",
      },
      to: String,
    },
  ],
  store: {
    type: Schema.Types.ObjectId,
    ref: "Store",
  },
  reviews: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      content: { type: String, default: "" },
      rate: { type: Number, default: 0 },
    },
  ],
});

module.exports = mongoose.model("Owner", ownerSchema);
