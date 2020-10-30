const { login, signup } = require("./user.schema");

module.exports = {
  loginValidation: async (req, res, next) => {
    const value = await login.validate(req.body);
    if (value.error) {
      res.status(400).json({
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },

  signupValidation: async (req, res, next) => {
    const value = await signup.validate(req.body);
    if (value.error) {
      res.status(400).json({
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },
};
