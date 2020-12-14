const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const eventController = require("../controllers/event");

const awsUpload = require("../startup/aws-s3-upload");

const router = express.Router();

router.get("/", passportJWT, eventController.getAll);

router.post(
  "/",
  passportJWT,
  awsUpload.single("image"),
  eventController.addOne
);

router.get("/:eventId", passportJWT, eventController.getOne);

router.get("/group/:groupId", passportJWT, eventController.getGroupEvents);

router.delete("/:eventId", passportJWT, eventController.deleteOne);

router.get("/agree/:eventId", passportJWT, eventController.agreeOne);

router.get("/disagree/:eventId", passportJWT, eventController.disagreeOne);

router.post(
  "/app",
  passportJWT,
  awsUpload.single("image"),
  eventController.appAddOne
);

module.exports = router;
