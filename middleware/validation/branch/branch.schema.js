const joi = require("@hapi/joi");

const schema = {
  add: joi.object({
    // name: joi.string().required(),
    // image: joi.string().required(),
  }),
};

module.exports = schema;
