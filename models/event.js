const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: "Group",
    default: undefined,
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
  public: {
    type: Boolean,
    default: false,
  },
  voting: {
    type: Boolean,
    default: false,
  },
  agreedBy: {
    default: undefined,
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  disagreedBy: {
    default: undefined,
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
});

module.exports = mongoose.model("Event", eventSchema);
