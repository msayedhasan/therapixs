const express = require("express");

const passport = require("passport");

const passportJWT = passport.authenticate("jwt", { session: false });

const shippingController = require("../controllers/shipping");

const awsUpload = require("../startup/aws-s3-upload");

const router = express.Router();

router.get("/", passportJWT, shippingController.getAll);

router.get("/:shippingId", passportJWT, shippingController.getOne);

router.post("/", passportJWT, shippingController.addOne);

router.delete("/:shippingId", passportJWT, shippingController.deleteOne);

router.get("/:from/:to", passportJWT, shippingController.getCost);

module.exports = router;