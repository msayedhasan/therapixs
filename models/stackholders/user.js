const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  dob: String,
  phone: {
    type: Number,
    required: true,
  },
  methods: {
    type: [String],
    required: true,
  },
  local: {
    email: { type: String, lowercase: true },
    password: String,
  },
  facebook: {
    id: {
      type: String,
    },
    email: {
      type: String,
      lowercase: true,
    },
  },
  google: {
    id: {
      type: String,
    },
    email: {
      type: String,
      lowercase: true,
    },
  },
  locked: {
    type: Boolean,
    default: false,
  },
  fcmToken: String,
  address: String,
  location: {
    long: Number,
    lat: Number,
  },
  loyalityPoints: { type: Array, default: undefined },
  products: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    default: undefined,
  },
  ///////// not for all users /////////
  admin: Boolean,

  owner: Boolean,
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "Owner",
  },

  leader: Boolean,
  leaderId: {
    type: Schema.Types.ObjectId,
    ref: "Leader",
  },

  shipper: Boolean,
  shipperId: {
    type: Schema.Types.ObjectId,
    ref: "Shipper",
  },

  manager: Boolean,
  managerId: {
    type: Schema.Types.ObjectId,
    ref: "Manager",
  },

  sales: Boolean,
  salesId: {
    type: Schema.Types.ObjectId,
    ref: "Sales",
  },

  group: {
    type: Schema.Types.ObjectId,
    ref: "Group",
    default: undefined,
  },
});

module.exports = mongoose.model("User", userSchema);
