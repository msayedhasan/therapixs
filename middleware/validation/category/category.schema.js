const joi = require("@hapi/joi");

const schema = {
  add: joi.object({
    "name.en": joi.required(),
  }),
};

module.exports = schema;
