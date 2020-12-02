const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://via.placeholder.com/150",
    },
    dob: String,
    phone: Number,
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
    detailedAddress: String,

    location: {
        long: Number,
        lat: Number,
    },
    loyalityPoints: { type: Array, default: undefined },
    products: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Product",
        }, ],
        default: undefined,
    },
    orders: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Order",
        }, ],
        default: undefined,
    },
    soldOrders: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "Order",
        }, ],
        default: undefined,
    },
    gainToApp: { type: Number, default: 0 },
    totalGainCollected: { type: Number, default: 0 },
    ///////// not for all users /////////
    admin: Boolean,

    owner: Boolean,
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: "Owner",
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: "Store",
        default: undefined,
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
    groupRequest: {
        type: Schema.Types.ObjectId,
        ref: "Group",
        default: undefined,
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: "Group",
        default: undefined,
    },
});

module.exports = mongoose.model("User", userSchema);