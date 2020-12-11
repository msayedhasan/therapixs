const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usedBikeSchema = new Schema({
  orders: [
    {
      at: String,
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      order: {
        type: Schema.Types.ObjectId,
        ref: "Order",
      },
    },
  ],

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
  description: String,
  model: {
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
  properties: [
    {
      type: Schema.Types.ObjectId,
      ref: "usedBikeProperty",
    },
  ],

  // properties: [
  //   {
  //     price: {
  //       type: Number,
  //       required: true,
  //     },
  //     qty: {
  //       type: Number,
  //       required: true,
  //     },
  //     usedBikeAttributes: [],
  //   },
  // ],

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

  profitType: { type: String, default: "" },
  profitPercentage: { type: Number, default: 0 },
  profitValue: { type: Number, default: 0 },
  profit: {
    type: Schema.Types.ObjectId,
    ref: "Profit",
    default: undefined,
  },

  discountType: { type: String, default: "" },
  discountPercentage: { type: Number, default: 0 },
  discountValue: { type: Number, default: 0 },
  discount: {
    type: Schema.Types.ObjectId,
    ref: "Discount",
    default: undefined,
  },

  createdAt: String,
  updatedAt: String,
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: undefined,
  },
});

module.exports = mongoose.model("UsedBike", usedBikeSchema);
