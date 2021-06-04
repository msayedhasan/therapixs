const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const isAuth = require("../middleware/is-auth");

const bikeController = require("../controllers/bike");

const awsUpload = require("../startup/aws-s3-upload");

const router = express.Router();

router.get("/", passportJWT, bikeController.getAll);

router.get(
  "/getActivatedBikes",
  passportJWT,
  bikeController.getActivatedBikes
);

router.get(
  "/getActivatedBikes/discount/:discountId",
  passportJWT,
  bikeController.getActivatedBikesWithDiscount
);

router.post(
  "/",
  passportJWT,
  awsUpload.array("photos"),
  bikeController.addOne
);

router.post(
  "/app",
  passportJWT,
  awsUpload.array("photos"),
  bikeController.appAddOne
);

router.get("/bestSelling", passportJWT, bikeController.getBestSelling);

router.get("/:bikeId", passportJWT, bikeController.getOne);

router.post("/addReview/:bikeId", passportJWT, bikeController.addReview);

router.put(
  "/:bikeId",
  passportJWT,
  awsUpload.array("photos"),
  bikeController.updateOne
);

router.delete("/:bikeId", passportJWT, bikeController.deleteOne);

router.post(
  "/addBikeToStore/:bikeId/:storeId",
  passportJWT,
  bikeController.addBikeToStore
);

router.get("/activate/:bikeId", passportJWT, bikeController.activateOne);

router.get("/deactivate/:bikeId", passportJWT, bikeController.deactivateOne);

router.get("/sold/:bikeId", passportJWT, bikeController.soldOne);

router.get("/available/:bikeId", passportJWT, bikeController.availableOne);

router.post("/discount/add/:bikeId", passportJWT, bikeController.addDiscount);

router.delete(
  "/discount/delete/:bikeId",
  passportJWT,
  bikeController.deleteDiscount
);

module.exports = router;
