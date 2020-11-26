const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const ownerController = require("../../controllers/stackholders/owner");

const router = express.Router();

router.get("/", passportJWT, ownerController.getAll);

router.get("/:ownerId", passportJWT, ownerController.getOne);

router.post("/addOwner/:userId", passportJWT, ownerController.addOwner);

router.post(
    "/addOwnerToStore/:userId/:storeId",
    passportJWT,
    ownerController.addOwnerToStore
);

router.get("/lock/:ownerId", passportJWT, ownerController.lockOwner);

router.get("/unlock/:ownerId", passportJWT, ownerController.unlockOwner);

router.delete("/deleteOwner/:userId", passportJWT, ownerController.deleteOwner);

module.exports = router;