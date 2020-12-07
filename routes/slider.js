const express = require("express");

const passport = require("passport");

const passportJWT = passport.authenticate("jwt", { session: false });

const sliderController = require("../controllers/slider");

const awsUpload = require("../startup/aws-s3-upload");

const router = express.Router();

router.get("/", sliderController.getAll);

router.get("/:sliderId", passportJWT, sliderController.getOne);

router.post(
  "/",
  passportJWT,
  awsUpload.single("image"),
  sliderController.addOne
);

router.put(
  "/:sliderId",
  passportJWT,
  awsUpload.single("image"),
  sliderController.updateOne
);

router.delete("/:sliderId", passportJWT, sliderController.deleteOne);

module.exports = router;
