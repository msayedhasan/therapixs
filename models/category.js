const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        ar: {
            type: String,
        },
        en: {
            type: String,
            required: true,
        },
    },
    image: {
        type: String,
    },
    level: {
        type: Number,
        default: undefined,
    },
    parentCategory: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        default: undefined,
    },
    categories: {
        default: undefined,
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Category",
        }, ],
    },
    products: {
        default: undefined,
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Product",
        }, ],
    },
    productAttributes: [{
        type: Schema.Types.ObjectId,
        ref: "ProductAttribute",
    }, ],
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

    profitType: { type: String, default: "" },
    profitPercentage: { type: Number, default: 0 },
    profitValue: { type: Number, default: 0 },

    discountType: { type: String, default: "" },
    discountPercentage: { type: Number, default: 0 },
    discountValue: { type: Number, default: 0 },
});

module.exports = mongoose.model("Category", categorySchema);