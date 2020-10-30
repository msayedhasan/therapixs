const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    ar: {
      type: String,
      required: true,
    },
    en: {
      type: String,
      required: true,
    },
  },
  image: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    default: undefined,
  },
  parentCategory: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    default: undefined,
  },
  categories: {
    default: undefined,
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
  },
  products: {
    default: undefined,
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  productAttributes: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "ProductAttribute",
      },
    ],
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: String,
  updatedAt: String,
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Category", categorySchema);
