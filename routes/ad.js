const express = require("express");

const passport = require("passport");

const passportJWT = passport.authenticate("jwt", { session: false });

const adController = require("../controllers/ad");

const router = express.Router();

router.get("/", passportJWT, adController.getAll);

router.post("/", passportJWT, adController.addOne);

router.get("/:adId", passportJWT, adController.getOne);

router.put("/:adId", passportJWT, adController.updateOne);

router.delete("/:adId", passportJWT, adController.deleteOne);

module.exports = router;
