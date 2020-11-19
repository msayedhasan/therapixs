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

router.post("/login", loginValidation, authController.login);

router.post("/google", googleValidation, authController.google);

router.post(
    "/oauth/facebook",
    passport.authenticate("facebookToken", { session: false }),
    authController.facebookOAuth
);

router.post(
    "/oauth/google",
    // passport.authenticate(
    //     "google", { scope: ["email", "profile"] }, { session: false }
    // ),
    passport.authenticate("googleToken", { session: false }),
    authController.googleOAuth
);

router.get("/me", passportJWT, authController.getProfile);

module.exports = router;