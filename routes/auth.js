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
// router.post("/login", loginValidation, authController.login);

// router.post("/resetPassword", authController.resetPassword);

router.post("/verifyOtp", authController.verifyOtp);
router.post("/sendOtp", authController.sendOtp);

// router.post("/google", googleValidation, authController.google);
// router.post(
//   "/syncGoogle",
//   passportJWT,
//   googleValidation,
//   authController.syncGoogle
// );

// router.post("/apple", authController.apple);
// router.post("/syncApple", passportJWT, authController.syncApple);

// router.post("/facebook", authController.facebook);
// router.post("/syncFacebook", passportJWT, authController.syncFacebook);

router.get("/me", passportJWT, authController.getProfile);

// router.post(
//   "/oauth/facebook",
//   passport.authenticate("facebookToken", { session: false }),
//   authController.facebookOAuth
// );

// router.post(
//   "/oauth/google",
//   // passport.authenticate(
//   //     "google", { scope: ["email", "profile"] }, { session: false }
//   // ),
//   passport.authenticate("googleToken", { session: false }),
//   authController.googleOAuth
// );

module.exports = router;
