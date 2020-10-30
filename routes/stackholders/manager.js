const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const managerController = require("../../controllers/stackholders/manager");

const router = express.Router();

const {
  addBranchValidation,
} = require("../../middleware/validation/branch/branch.validation");

router.get("/", passportJWT, managerController.getAll);

router.get("/:managerId", passportJWT, managerController.getOne);

router.post(
  "/addBranchManager/:branchId/:userId",
  passportJWT,
  branchController.addBranchManager
);

router.delete(
  "/deleteBranchManager/:branchId/:userId",
  passportJWT,
  branchController.deleteBranchManager
);

module.exports = router;
