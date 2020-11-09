const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  orderedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: undefined,
  },

  cancelled: {
    type: Boolean,
    default: false,
  },
  cancelledBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: undefined,
  },
  cancelledAt: String,

  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },

  confirmed: {
    type: Boolean,
    default: false,
  },
  confirmedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: undefined,
  },
  confirmedAt: String,

  shipper: {
    type: Schema.Types.ObjectId,
    ref: "Shipper",
    default: undefined,
  },

  shipped: {
    type: Boolean,
    default: false,
  },
  shippedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: undefined,
  },
  shippedAt: String,

  deliveredAt: String,
  delivered: {
    type: Boolean,
    default: false,
  },

  refund: {
    type: Boolean,
    default: false,
  },
  refundAt: String,
});

module.exports = mongoose.model("Order", orderSchema);
