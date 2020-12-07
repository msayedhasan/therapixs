const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const categoryController = require("../controllers/category");

const awsUpload = require("../startup/aws-s3-upload");

const router = express.Router();

router.get("/", passportJWT, categoryController.getAll);

router.get(
  "/getBaseCategories",
  passportJWT,
  categoryController.getBaseCategories
);

router.get("/:categoryId", passportJWT, categoryController.getOne);

router.get(
  "/:categoryId/getCategoryActivatedProducts",
  passportJWT,
  categoryController.getCategoryActivatedProducts
);

router.post(
  "/",
  passportJWT,
  awsUpload.single("image"),
  categoryController.addOne
);

router.post(
  "/:categoryId",
  passportJWT,
  awsUpload.single("image"),
  categoryController.addSubCategory
);

router.put(
  "/:categoryId",
  passportJWT,
  awsUpload.single("image"),
  categoryController.updateOne
);

router.delete("/:categoryId", passportJWT, categoryController.deleteOne);

router.post(
  "/discount/add/:categoryId",
  passportJWT,
  categoryController.addDiscount
);

module.exports = router;
