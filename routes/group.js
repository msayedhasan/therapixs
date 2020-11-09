const express = require("express");

const passport = require("passport");

const passportJWT = passport.authenticate("jwt", { session: false });

const groupController = require("../controllers/group");

const router = express.Router();

router.get("/", passportJWT, groupController.getAll);

router.post("/", passportJWT, groupController.addOne);

router.get("/:groupId", passportJWT, groupController.getOne);

router.put("/:groupId", passportJWT, groupController.updateOne);

router.delete("/:groupId", passportJWT, groupController.deleteOne);

router.get("/lock/:groupId", passportJWT, groupController.lockOne);

router.get("/unlock/:groupId", passportJWT, groupController.unlockOne);

module.exports = router;
