const express = require("express");

const passport = require("passport");

const passportJWT = passport.authenticate("jwt", { session: false });

const storeController = require("../controllers/store");

const awsUpload = require("../startup/aws-s3-upload");

const router = express.Router();

router.get("/", passportJWT, storeController.getAll);

router.get("/:storeId", passportJWT, storeController.getOne);

router.post(
  "/",
  passportJWT,
  awsUpload.single("image"),
  storeController.addOne
);

router.put(
  "/:storeId",
  passportJWT,
  awsUpload.single("image"),
  storeController.updateOne
);

router.delete("/:storeId", passportJWT, storeController.deleteOne);

router.get("/activate/:storeId", passportJWT, storeController.activateOne);

router.get("/deactivate/:storeId", passportJWT, storeController.deactivateOne);

router.get("/lock/:storeId", passportJWT, storeController.lockOne);

router.get("/unlock/:storeId", passportJWT, storeController.unlockOne);

router.get("/collect/:storeId", passportJWT, storeController.collect);

router.post("/discount/add/:storeId", passportJWT, storeController.addDiscount);

router.delete(
  "/discount/delete/:storeId",
  passportJWT,
  storeController.deleteDiscount
);

router.post("/profit/add/:storeId", passportJWT, storeController.addProfit);

router.delete(
  "/profit/delete/:storeId",
  passportJWT,
  storeController.deleteProfit
);

router.post(
  "/app",
  passportJWT,
  awsUpload.single("image"),
  storeController.appAddOne
);

module.exports = router;
