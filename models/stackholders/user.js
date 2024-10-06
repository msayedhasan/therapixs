const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  phone: Number,
  password: String,
  otpVerified :  { type: Boolean, default: false },
  otp: {type: Number},

  locked: {
    type: Boolean,
    default: undefined,
  },
  fcmToken: String,

  pocket: [
    {
      name: String,
      qty: Number,
      qtyAssigned: Number,
      qtyUsed: Number,
      child: {
        type:
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: "User",
          },

        },

        default: undefined
      },
      parent: {
        type:
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: "User",
          },

        },

        default: undefined
      },
    },
  ],

  // old tests 
  tests: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "Test",
      },
    ],
    default: undefined,
  },


  // cart: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Cart",
  //   default: undefined,
  // },

  parents: {
    type: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        tests: [{
          type: Schema.Types.ObjectId,
          ref: "Test",
        }],
      },
    ],
    default: undefined
  },
  children: {
    type: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        tests: [{
          type: Schema.Types.ObjectId,
          ref: "Test",
        }],
      },
    ],
    default: undefined
  },
  ///////// not for all users /////////
  admin: Boolean,
});

module.exports = mongoose.model("User", userSchema);
