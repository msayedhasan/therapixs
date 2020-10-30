const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const branchSchema = new Schema({
  locked: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Store",
  },
  managers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Manager",
    },
  ],
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  sales: [
    {
      type: Schema.Types.ObjectId,
      ref: "Sales",
    },
  ],
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
  address: String,
  location: {
    long: Number,
    lat: Number,
  },
  createdAt: String,
});

module.exports = mongoose.model("Branch", branchSchema);
