const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const shipperController = require("../../controllers/stackholders/shipper");

const router = express.Router();

router.get("/", passportJWT, shipperController.getAll);

router.get("/:shipperId", passportJWT, shipperController.getOne);

router.post("/addShipper/:userId", passportJWT, shipperController.addShipper);

router.delete(
    "/deleteShipper/:userId",
    passportJWT,
    shipperController.deleteShipper
);

router.get(
    "/lock/:shipperId",
    passportJWT,
    shipperController.lockShipper
);

router.get(
    "/unlock/:shipperId",
    passportJWT,
    shipperController.unlockShipper
);
module.exports = router;