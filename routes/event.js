const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const eventController = require("../controllers/event");

const router = express.Router();

router.get("/", passportJWT, eventController.getAll);

router.get("/:groupId", passportJWT, eventController.getGroupEvents);

router.post("/", passportJWT, eventController.addOne);

router.get("/:eventId", passportJWT, eventController.getOne);

router.delete("/:eventId", passportJWT, eventController.deleteOne);

module.exports = router;
