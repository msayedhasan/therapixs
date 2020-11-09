const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storeSchema = new Schema({
  locked: {
    type: Boolean,
    default: false,
  },
  lockedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: undefined,
  },
  unlockedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: undefined,
  },
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
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "images/placeholder.jpg",
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  owners: [
    {
      type: Schema.Types.ObjectId,
      ref: "Owner",
    },
  ],
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
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
