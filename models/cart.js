const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: undefined,
  },

  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      qty: Number,
      availableQty: Number,
      property: {
        type: Schema.Types.ObjectId,
        ref: "productProperty",
        required: true,
      },
      shipping: Number,
    },
  ],

  shipping: Number,
});

module.exports = mongoose.model("Cart", cartSchema);
