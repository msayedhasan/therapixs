const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const discountSchema = new Schema({
  discountType: { type: String, default: "" },
  discountPercentage: { type: Number, default: 0 },
  discountValue: { type: Number, default: 0 },
  discountOn: { type: String, required: true },

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

module.exports = mongoose.model("Discount", discountSchema);
