const express = require("express");

const passport = require("passport");

const passportJWT = passport.authenticate("jwt", { session: false });

const notificationController = require("../controllers/notification");

const router = express.Router();

// router.post("/single", passportJWT, notificationController.sendToDevice);
router.post("/single", passportJWT, notificationController.send);
router.post("/multiple", passportJWT, notificationController.sendMultiCast);

module.exports = router;
