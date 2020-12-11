const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productPropertySchema = new Schema({
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  productAttributes: [],
});

module.exports = mongoose.model("productProperty", productPropertySchema);
