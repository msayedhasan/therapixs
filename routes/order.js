const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const orderController = require("../controllers/order");

const router = express.Router();

router.get("/", passportJWT, orderController.getAll);

router.get("/confirmOne/:orderId", passportJWT, orderController.confirmOne);

router.get("/shipOne/:orderId", passportJWT, orderController.shipOne);

router.get("/deliverOne/:orderId", passportJWT, orderController.deliverOne);

module.exports = router;
