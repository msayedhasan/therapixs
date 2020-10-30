const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storeSchema = new Schema({
  locked: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  owners: [
    {
      type: Schema.Types.ObjectId,
      ref: "Owner",
    },
  ],
  products: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    default: undefined,
  },
  numberOfBranches: {
    type: Number,
    default: undefined,
  },
  branches: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Branch",
      },
    ],
    default: undefined,
  },
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
  nextRentalDate: { type: String, default: undefined },
  rent: { type: Number, default: undefined },
  createdAt: { type: String, default: undefined },
  updatedAt: { type: String, default: undefined },
});

module.exports = mongoose.model("Store", storeSchema);
