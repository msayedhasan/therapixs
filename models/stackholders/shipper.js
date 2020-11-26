const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shipperSchema = new Schema({
    locked: {
        type: Boolean,
        default: false,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order",
    }, ],
});

module.exports = mongoose.model("Shipper", shipperSchema);