const express = require("express");

const passport = require("passport");

const passportJWT = passport.authenticate("jwt", { session: false });
const storeController = require("../controllers/store");

const {
  addStoreValidation,
} = require("../middleware/validation/store/store.validation");

const router = express.Router();

router.get("/", passportJWT, storeController.getAll);

router.post("/", addStoreValidation, passportJWT, storeController.addOne);

router.get("/:storeId", passportJWT, storeController.getOne);

router.put(
  "/update/:storeId",
  addStoreValidation,
  passportJWT,
  storeController.updateOne
);

router.delete("/delete/:storeId", passportJWT, storeController.deleteOne);

module.exports = router;
