const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const orderController = require("../controllers/order");

const router = express.Router();

// router.get("/", passportJWT, orderController.getAll);

// router.post("/makeOrder", passportJWT, orderController.makeOrder);

// router.get("/confirmOne/:orderId", passportJWT, orderController.confirmOne);

// router.get("/shipOne/:orderId", passportJWT, orderController.shipOne);

// router.get("/deliverOne/:orderId", passportJWT, orderController.deliverOne);

// router.get("/getClinic/:clinicId", passportJWT, orderController.getClinic);

// router.post("/cancel/:orderId", passportJWT, orderController.cancelOne);
// router.get("/cancelCompleteOrder/:orderId", passportJWT, orderController.cancelCompleteOrder);

// router.get("/:orderId", passportJWT, orderController.getOne);

module.exports = router;
