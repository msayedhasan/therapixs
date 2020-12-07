const express = require("express");

const passport = require("passport");

const passportJWT = passport.authenticate("jwt", { session: false });

const profitController = require("../controllers/profit");

const router = express.Router();

router.get("/", passportJWT, profitController.getAll);

router.delete("/:profitId", passportJWT, profitController.deleteOne);

module.exports = router;
