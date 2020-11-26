const express = require("express");

const passport = require("passport");

const passportJWT = passport.authenticate("jwt", { session: false });

const adController = require("../controllers/ad");

const awsUpload = require("../startup/aws-s3-upload");

const router = express.Router();

router.get("/", passportJWT, adController.getAll);

router.get("/:adId", passportJWT, adController.getOne);

router.post("/", passportJWT, awsUpload.single("image"), adController.addOne);

router.put(
    "/:adId",
    passportJWT,
    awsUpload.single("image"),
    adController.updateOne
);

router.delete("/:adId", passportJWT, adController.deleteOne);

module.exports = router;