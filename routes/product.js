const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const isAuth = require("../middleware/is-auth");

const productController = require("../controllers/product");

const router = express.Router();

router.get("/", passportJWT, productController.getAll);

router.post("/", passportJWT, productController.addOne);

router.get("/:productId", passportJWT, productController.getOne);

router.post("/addReview/:productId", passportJWT, productController.addReview);

router.put("/:productId", passportJWT, productController.updateOne);

router.delete("/:productId", passportJWT, productController.deleteOne);

module.exports = router;
