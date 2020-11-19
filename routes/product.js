const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const isAuth = require("../middleware/is-auth");

const productController = require("../controllers/product");

const awsUpload = require("../startup/aws-s3-upload");

const router = express.Router();

router.get("/", passportJWT, productController.getAll);

router.post(
  "/",
  // awsUpload.fields([
  //   { name: "image", maxCount: 1 },
  //   { name: "photos", maxCount: 5 },
  // ]),
  passportJWT,
  awsUpload.array("photos", 5),
  productController.addOne
);

router.get("/:productId", passportJWT, productController.getOne);

router.post("/addReview/:productId", passportJWT, productController.addReview);

router.put(
  "/:productId",
  passportJWT,
  awsUpload.array("photos", 5),
  productController.updateOne
);

router.delete("/:productId", passportJWT, productController.deleteOne);

router.get("/activate/:productId", passportJWT, productController.activateOne);

router.get(
  "/deactivate/:productId",
  passportJWT,
  productController.deactivateOne
);

router.get("/sold/:productId", passportJWT, productController.soldOne);

router.get(
  "/available/:productId",
  passportJWT,
  productController.availableOne
);

module.exports = router;
