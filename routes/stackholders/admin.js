const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const adminController = require("../../controllers/stackholders/admin");

const router = express.Router();

router.post(
  "/activateStore/:storeId",
  passportJWT,
  adminController.activateStore
);

router.put(
  "/editNumberOfBranches/:storeId",
  passportJWT,
  adminController.editNumberOfBranches
);

module.exports = router;
