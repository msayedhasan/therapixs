const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dealSchema = new Schema({
  branch: {
    type: Schema.Types.ObjectId,
    ref: "Branch",
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  cashier: String,
  price: {
    type: Number,
    required: true,
  },
  review: {
    content: String,
    rate: { type: Number, default: 0 },
  },
});

module.exports = mongoose.model("Deal", dealSchema);
