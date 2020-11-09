const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  ordered: {
    type: Boolean,
    default: false,
  },
  orderedAt: String,
  orderedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: undefined,
  },

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
  image: {
    type: String,
    required: true,
  },
  name: {
    ar: {
      type: String,
    },
    en: {
      type: String,
      required: true,
    },
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
  description: {
    ar: {
      type: String,
    },
    en: {
      type: String,
    },
  },
  productAttributes: [],
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
  createdAt: String,
  updatedAt: String,
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Product", productSchema);
