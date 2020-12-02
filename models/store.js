const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storeSchema = new Schema({
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
    active: {
        type: Boolean,
        default: false,
    },
    activatedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: undefined,
    },
    deactivatedBy: {
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
        default: "https://via.placeholder.com/150",
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    owners: [{
        type: Schema.Types.ObjectId,
        ref: "Owner",
    }, ],
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product",
    }, ],
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order",
    }, ],
    numberOfBranches: {
        type: Number,
        default: undefined,
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: "Place",
        required: true,
    },
    detailedAddress: {
        type: String,
        required: true,
    },
    branches: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Branch",
        }, ],
        default: undefined,
    },
    reviews: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        content: { type: String, default: "" },
        rate: { type: Number, default: 0 },
    }, ],

    profitType: { type: String, default: "" },
    profitPercentage: { type: Number, default: 0 },
    profitValue: { type: Number, default: 0 },

    discountType: { type: String, default: "" },
    discountPercentage: { type: Number, default: 0 },
    discountValue: { type: Number, default: 0 },

    gainToApp: { type: Number, default: 0 },
    totalGainCollected: { type: Number, default: 0 },

    lastCollectBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    lastCollectAt: { type: String, default: undefined },

    createdAt: { type: String, default: undefined },
    updatedAt: { type: String, default: undefined },
});

module.exports = mongoose.model("Store", storeSchema);