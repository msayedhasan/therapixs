const express = require("express");
const passport = require("passport");
const passportJWT = passport.authenticate("jwt", { session: false });

const categoryController = require("../controllers/category");
const {
  addCategoryValidation,
} = require("../middleware/validation/category/category.validation");
const router = express.Router();

router.get("/", passportJWT, categoryController.getAll);

router.get("/getBaseCategories", passportJWT, categoryController.getBaseCategories);

router.post("/", passportJWT, categoryController.addOne);

router.post("/:categoryId", passportJWT, categoryController.addSubCategory);

router.get("/:categoryId", passportJWT, categoryController.getOne);

router.put("/:categoryId", passportJWT, categoryController.updateOne);

router.delete("/:categoryId", passportJWT, categoryController.deleteOne);

module.exports = router;
