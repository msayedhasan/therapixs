const express = require("express");

const passport = require("passport");

const passportJWT = passport.authenticate("jwt", { session: false });
const userController = require("../../controllers/stackholders/user");

const router = express.Router();

router.get("/", passportJWT, userController.getAll);

router.get("/:userId", passportJWT, userController.getOne);

router.post("/getOneByPhone", passportJWT, userController.getOneByPhone);

router.put("/", passportJWT, userController.updateOne);

module.exports = router;
