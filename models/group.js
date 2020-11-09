const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const groupSchema = new Schema({
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
  leader: {
    type: Schema.Types.ObjectId,
    ref: "Leader",
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
  createdAt: { type: String, default: undefined },
  updatedAt: { type: String, default: undefined },
});

module.exports = mongoose.model("Group", groupSchema);
