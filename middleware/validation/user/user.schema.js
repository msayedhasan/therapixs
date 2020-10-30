const joi = require("@hapi/joi");

const schema = {
  login: joi.object({
    email: joi.string().required(),
    // phone: joi.number().required(),
    password: joi.string().required(),
  }),

  signup: joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    phone: joi.number().required(),
    password: joi.string().required(),
  }),
};

module.exports = schema;
