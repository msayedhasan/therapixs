const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productAttributeSchema = new Schema({
  name: {
    ar: {
      type: String,
    },
    en: {
      type: String,
      required: true,
    },
  },
  values: [
    {
      ar: {
        type: String,
      },
      en: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("ProductAttribute", productAttributeSchema);
