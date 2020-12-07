const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profitSchema = new Schema({
  profitType: { type: String, default: "" },
  profitPercentage: { type: Number, default: 0 },
  profitValue: { type: Number, default: 0 },
  profitOn: { type: String, required: true },

  store: {
    type: Schema.Types.ObjectId,
    ref: "Store",
    default: undefined,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    default: undefined,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    default: undefined,
  },

  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: { type: String, default: undefined },
  validTill: { type: String, default: undefined },
});

module.exports = mongoose.model("Profit", profitSchema);
