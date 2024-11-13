const express = require("express");

const authController = require("../controllers/auth");

const passport = require("passport");
const passportConfig = require("../passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const {
  googleValidation,
  loginValidation,
  signupValidation,
} = require("../middleware/validation/user/user.validation");

const router = express.Router();

router.post("/signup", signupValidation, authController.signup);

router.post("/login", authController.login);

router.post("/verifyOtp", authController.verifyOtp);
router.post("/sendOtp", authController.sendOtp);

router.get("/me", authController.getProfile);


module.exports = router;
