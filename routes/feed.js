const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const feedController = require("../controllers/feed");

const router = express.Router();

router.get("/", passportJWT, feedController.getAll);

router.post("/", passportJWT, feedController.addOne);

router.get("/:feedId", passportJWT, feedController.getOne);

router.put("/:feedId", passportJWT, feedController.updateOne);

router.delete("/:feedId", passportJWT, feedController.deleteOne);

module.exports = router;
