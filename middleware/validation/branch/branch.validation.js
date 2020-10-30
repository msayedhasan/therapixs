const { add } = require("./branch.schema");

module.exports = {
  addBranchValidation: async (req, res, next) => {
    const value = await add.validate(req.body);
    if (value.error) {
      res.status(400).json({
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },
};
