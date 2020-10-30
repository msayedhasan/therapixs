const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const managerSchema = new Schema({
  locked: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "images/placeholder.jpg",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  branch: {
    type: Schema.Types.ObjectId,
    ref: "Branch",
  },
  managerHistory: [
    {
      from: String,
      branch: {
        type: Schema.Types.ObjectId,
        ref: "Branch",
      },
      to: String,
    },
  ],
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
  from: String,
  updatedAt: String,
  to: String,
});

module.exports = mongoose.model("Manager", managerSchema);
