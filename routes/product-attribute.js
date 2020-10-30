const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const productAttributeController = require("../controllers/product-attribute");

const router = express.Router();

router.get("/", passportJWT, productAttributeController.getAll);

router.post("/", passportJWT, productAttributeController.addOne);

router.get(
  "/:productAttributeId",
  passportJWT,
  productAttributeController.getOne
);

router.put(
  "/:productAttributeId",
  passportJWT,
  productAttributeController.updateOne
);

router.delete(
  "/:productAttributeId",
  passportJWT,
  productAttributeController.deleteOne
);

module.exports = router;
