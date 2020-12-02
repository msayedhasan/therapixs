const express = require("express");

const passport = require("passport");

const passportJWT = passport.authenticate("jwt", { session: false });

const placeController = require("../controllers/place");

const awsUpload = require("../startup/aws-s3-upload");

const router = express.Router();

router.get("/", placeController.getAll);

router.get("/:placeId", passportJWT, placeController.getOne);

router.post("/", passportJWT, placeController.addOne);

router.put("/:placeId", passportJWT, placeController.updateOne);

router.delete("/:placeId", passportJWT, placeController.deleteOne);

module.exports = router;