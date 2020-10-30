const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const feedSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
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
  description: {
    ar: {
      type: String,
      required: true,
    },
    en: {
      type: String,
      required: true,
    },
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

module.exports = mongoose.model("Feed", feedSchema);
