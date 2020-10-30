const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const salesSchema = new Schema({
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
  reviews: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      content: String,
      rate: { type: Number, default: 0 },
    },
  ],
  from: String,
  updatedAt: String,
  to: String,
});

module.exports = mongoose.model("Sales", salesSchema);
