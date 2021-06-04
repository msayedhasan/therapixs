const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const cartController = require("../controllers/cart");

const router = express.Router();

router.post("/getCart", passportJWT, cartController.getCart);

router.post("/addItem", passportJWT, cartController.addItem);

router.post("/removeItem", passportJWT, cartController.removeItem);

router.post("/deleteItem", passportJWT, cartController.deleteItem);

module.exports = router;
