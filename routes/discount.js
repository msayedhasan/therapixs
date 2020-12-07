const express = require("express");

const passport = require("passport");

const passportJWT = passport.authenticate("jwt", { session: false });

const discountController = require("../controllers/discount");

const router = express.Router();

const awsUpload = require("../startup/aws-s3-upload");

router.get("/", passportJWT, discountController.getAll);

router.delete("/:discountId", passportJWT, discountController.deleteOne);

router.post(
  "/advertise/:discountId",
  passportJWT,
  awsUpload.single("image"),
  discountController.addAdvertise
);

module.exports = router;
