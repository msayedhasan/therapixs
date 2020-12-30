const joi = require("@hapi/joi");

const schema = {
    google: joi.object({
        id: joi.required(),
        email: joi.string().required(),
        name: joi.string().required(),
        fcmToken: joi.string(),
    }),

    login: joi.object({
        // email: joi.string().required(),
        phone: joi.number().required(),
        fcmToken: joi.string(),
        password: joi.string().required(),
    }),

    signup: joi.object({
        name: joi.string().required(),
        // email: joi.string().required(),
        phone: joi.number().required(),
        fcmToken: joi.string(),
        password: joi.string().required(),
        address: joi.string().required(),
    }),
};

module.exports = schema;