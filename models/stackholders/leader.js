const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const leaderSchema = new Schema({
  locked: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  leaderHistory: [
    {
      from: String,
      group: {
        type: Schema.Types.ObjectId,
        ref: "Group",
      },
      to: String,
    },
  ],
  group: {
    type: Schema.Types.ObjectId,
    ref: "Group",
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
});

module.exports = mongoose.model("Leader", leaderSchema);
