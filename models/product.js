const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  orderedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  orderedQty: Number,
  orderedAt: String,
  sold: {
    type: Boolean,
    default: false,
  },
  soldAt: String,
  active: {
    type: Boolean,
    default: false,
  },
  activatedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: undefined,
  },
  deactivatedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: undefined,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  branch: {
    type: Schema.Types.ObjectId,
    ref: "Branch",
    default: undefined,
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "Store",
    default: undefined,
  },
  photos: [String],
  name: {
    type: String,
    required: true,
  },
  category: {
    _id: {
      type: String,
      required: true,
    },
    ar: {
      type: String,
    },
    en: {
      type: String,
      required: true,
    },
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  productAttributes: [],
  reviews: [
    {
      content: { type: String, default: "" },
      rate: { type: Number, default: 0 },
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  createdAt: String,
  updatedAt: String,
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Product", productSchema);
