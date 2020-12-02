const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    seller: {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: undefined,
    },

    store: {
        type: Schema.Types.ObjectId,
        ref: "Store",
        default: undefined,
    },

    products: [{
        qty: Number,
        price: Number,
        productName: String,
        productImage: String,
        productSelectedProperty: Number,
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        itemAddress: String,
    }, ],

    profit: Number,

    from: String,

    to: String,
    detailedAddress: String,

    orderedAt: String,
    orderedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    cancelled: {
        type: Boolean,
        default: false,
    },
    cancelledBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: undefined,
    },
    cancelledAt: String,

    confirmed: {
        type: Boolean,
        default: false,
    },
    confirmedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: undefined,
    },
    confirmedAt: String,

    shipped: {
        type: Boolean,
        default: false,
    },
    shippedBy: {
        type: Schema.Types.ObjectId,
        ref: "Shipper",
        default: undefined,
    },
    shippedAt: String,

    deliveredAt: String,
    delivered: {
        type: Boolean,
        default: false,
    },

    refund: {
        type: Boolean,
        default: false,
    },
    refundAt: String,
});

module.exports = mongoose.model("Order", orderSchema);