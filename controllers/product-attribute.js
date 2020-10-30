const ProductAttribute = require("../models/product-attribute");

exports.getAll = async (req, res, next) => {
  try {
    let productAttributes = await ProductAttribute.find();
    return res.status(200).json({
      message: "Fetched successfully",
      data: productAttributes,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  const productAttributeId = req.params.productAttributeId;
  try {
    const productAttribute = await ProductAttribute.findById(
      productAttributeId
    );
    if (!productAttribute) {
      const error = new Error("Could not find productAttribute.");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({
      message: "fetched successfully",
      data: productAttribute,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (!loggedInUser.admin && !loggedInUser.owner && !loggedInUser.manager) {
      const error = new Error(
        "Not authorized as you're not an admin, owner or manager!"
      );
      error.statusCode = 403;
      throw error;
    }

    const nameEn = JSON.parse(req.body.name).en;
    const nameAr = JSON.parse(req.body.name).ar;
    const values = JSON.parse(req.body.values);

    const productAttribute = new ProductAttribute({
      name: {
        en: nameEn,
        ar: nameAr,
      },
      values: values,
    });

    await productAttribute.save();

    return res.status(201).json({
      message: "Product attribute added successfully!",
      productAttribute: productAttribute,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (!loggedInUser.admin) {
      const error = new Error("Not authorized as you're not an admin!");
      error.statusCode = 403;
      throw error;
    }

    const nameEn = JSON.parse(req.body.name).en;
    const nameAr = JSON.parse(req.body.name).ar;
    const values = JSON.parse(req.body.values);

    const productAttributeId = req.params.productAttributeId;

    const productAttribute = await ProductAttribute.findById(
      productAttributeId
    );

    if (!productAttribute) {
      const error = new Error("Could not find productAttribute.");
      error.statusCode = 404;
      throw error;
    }

    productAttribute.name.en = nameEn;
    productAttribute.name.ar = nameAr;
    productAttribute.values = values;
    await productAttribute.save();

    return res
      .status(200)
      .json({ message: "Product attribute updated!", data: productAttribute });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const productAttributeId = req.params.productAttributeId;

    const productAttribute = await ProductAttribute.findById(
      productAttributeId
    );

    if (!productAttribute) {
      const error = new Error("Could not find productAttribute.");
      error.statusCode = 404;
      throw error;
    }

    const categories = await Category.find();
    for (var i = 0; i < categories.length; i++) {
      if (categories[i].productAttributes.includes(productAttributeId)) {
        categories[i].productAttributes.pull(productAttributeId);
        await categories[i].save();
      }
    }

    await ProductAttribute.findByIdAndDelete(productAttributeId);

    return res.status(200).json({ message: "ProductAttribute deleted!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
