const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shipperSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

module.exports = mongoose.model("Shipper", shipperSchema);
