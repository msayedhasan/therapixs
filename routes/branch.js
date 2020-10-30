const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const branchController = require("../controllers/branch");

const router = express.Router();

const {
  addBranchValidation,
} = require("../middleware/validation/branch/branch.validation");

router.post(
  "/addBranch",
  addBranchValidation,
  passportJWT,
  branchController.addBranch
);

router.put(
  "/updateBranch/:branchId",
  addBranchValidation,
  passportJWT,
  branchController.updateBranch
);

router.delete(
  "/deleteBranch/:branchId",
  addBranchValidation,
  passportJWT,
  branchController.deleteBranch
);

router.post("/addReview/:branchId", passportJWT, branchController.addReview);

module.exports = router;
