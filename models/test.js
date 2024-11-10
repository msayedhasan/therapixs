const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const testSchema = new Schema({
  // orders: [
  //   {
  //     at: String,
  //     user: {
  //       type: Schema.Types.ObjectId,
  //       ref: "User",
  //     },
  //     order: {
  //       type: Schema.Types.ObjectId,
  //       ref: "Order",
  //     },
  //   },
  // ],

  // parent is the doctor assigned test to pshyclogist to do
  parent: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  name: {
    type: String,
    required: true,
  },

  patient :{
    name: String,
    phone: Number,
    age: String,
    gender: String,
  },

  // description: String,

  createdAt: String,
  updatedAt: String,
  
  values: Array,
});

module.exports = mongoose.model("Test", testSchema);