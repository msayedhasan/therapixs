const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const isAuth = require("../middleware/is-auth");

const testController = require("../controllers/test");


const router = express.Router();

// router.get("/", passportJWT, testController.getAll);

// router.get(
//   "/getActivatedProducts",
//   passportJWT,
//   testController.getActivatedProducts
// );

// router.get(
//   "/getActivatedProducts/discount/:discountId",
//   passportJWT,
//   testController.getActivatedProductsWithDiscount
// );

router.put(
  "/",
  passportJWT,
  testController.updateTest
);

router.post(
  "/buyTests",
  passportJWT,
  testController.buyTests
);


router.post(
  "/addTestToChild",
  passportJWT,
  testController.addTestToChild
);

module.exports = router;
