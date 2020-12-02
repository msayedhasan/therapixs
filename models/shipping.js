const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shippingSchema = new Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },

    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    createdAt: { type: String, default: undefined },
});

module.exports = mongoose.model("Shipping", shippingSchema);