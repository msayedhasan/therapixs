const express = require("express");

const passport = require("passport");

const passportJWT = passport.authenticate("jwt", { session: false });

const notificationController = require("../controllers/notification");

const router = express.Router();

router.post("/", passportJWT, notificationController.send);

module.exports = router;
