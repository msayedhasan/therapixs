const express = require("express");

const authController = require("../controllers/auth");

const passport = require("passport");
const passportConfig = require("../passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const {
  loginValidation,
  signupValidation,
} = require("../middleware/validation/user/user.validation");

const router = express.Router();

router.post("/signup", signupValidation, authController.signup);

router.post("/login", loginValidation, authController.login);

router.get("/me", passportJWT, authController.getProfile);

module.exports = router;
