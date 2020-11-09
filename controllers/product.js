const Product = require("../models/product");
const Category = require("../models/category");
const Store = require("../models/store");
const User = require("../models/stackholders/user");
const Owner = require("../models/stackholders/owner");

exports.getAll = async (req, res, next) => {
  try {
    let products = await Product.find()
      .populate({
        path: "store",
        model: "Store",
      })
      .populate({
        path: "creator",
        model: "User",
      });
    return res.status(200).json({
      message: "Fetched successfully",
      data: products,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  const productId = req.params.productId;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      const error = new Error("Could not find product.");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({
      message: "fetched successfully",
      data: product,
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

    const imageFile = req.file;
    const name = JSON.parse(req.body.name);
    const description = JSON.parse(req.body.description);
    const price = JSON.parse(req.body.price);
    const categoryId = JSON.parse(req.body.category)._id;
    const categoryEn = JSON.parse(req.body.category).name.en;
    const categoryAr = JSON.parse(req.body.category).name.ar;
    const productAttributes = JSON.parse(req.body.productAttributes);

    if (!imageFile) {
      return res.status(422).json({ message: "Attached file is not an image" });
    }

    const image = imageFile.path;

    const product = new Product({
      creator: loggedInUser._id,
      createdAt: Date.now(),
      name: name,
      description: description,
      category: {
        _id: categoryId,
        en: categoryEn,
        ar: categoryAr,
      },
      image: image,
      price: price,
      productAttributes: productAttributes,
    });

    const category = await Category.findById(categoryId);
    if (category.categories && category.categories.length > 0) {
      const error = new Error("choose sub-category to add product in.");
      error.statusCode = 404;
      throw error;
    }

    if (loggedInUser.owner) {
      const owner = await Owner.findById(loggedInUser.ownerId);

      if (!owner) {
        const error = new Error("Could not find your ownership.");
        error.statusCode = 404;
        throw error;
      }

      const store = await Store.findById(owner.store);
      if (!store) {
        const error = new Error("You're not an owner of a store.");
        error.statusCode = 404;
        throw error;
      }

      if (!store.active || store.locked) {
        const error = new Error("store isn't active or locked.");
        error.statusCode = 404;
        throw error;
      }

      product.active = true;
      product.store = store._id;
      store.products.push(product._id);

      await store.save();
    } else {
      if (loggedInUser.products) {
        loggedInUser.products.push(product._id);
      } else {
        loggedInUser.products = [product._id];
      }
      await loggedInUser.save();
    }

    category.products.push(product._id);
    await category.save();
    await product.save();

    return res.status(201).json({
      message: "Product added successfully!",
      data: product,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.activateOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    const productId = req.params.productId;
    if (loggedInUser.admin) {
      const product = await Product.findById(productId);
      if (!product) {
        const error = new Error("Could not find product.");
        error.statusCode = 404;
        throw error;
      }

      if (product.active) {
        const error = new Error("product is already activated.");
        error.statusCode = 404;
        throw error;
      }

      product.active = true;
      product.activatedBy = loggedInUser._id;
      await product.save();

      return res.status(200).json({ message: "Product activated!" });
    } else {
      const error = new Error("Not authorized as you're not an admin!");
      error.statusCode = 403;
      throw error;
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deactivateOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    const productId = req.params.productId;
    if (loggedInUser.admin) {
      const product = await Product.findById(productId);
      if (!product) {
        const error = new Error("Could not find product.");
        error.statusCode = 404;
        throw error;
      }

      if (!product.active) {
        const error = new Error("product is already deactivated.");
        error.statusCode = 404;
        throw error;
      }

      product.active = false;
      product.deactivatedBy = loggedInUser._id;
      await product.save();

      return res.status(200).json({ message: "Product deactivated!" });
    } else {
      const error = new Error("Not authorized as you're not an admin!");
      error.statusCode = 403;
      throw error;
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.soldOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    const productId = req.params.productId;
    if (loggedInUser.admin) {
      const product = await Product.findById(productId);
      if (!product) {
        const error = new Error("Could not find product.");
        error.statusCode = 404;
        throw error;
      }

      if (product.sold) {
        const error = new Error("product is already sold.");
        error.statusCode = 404;
        throw error;
      }

      product.sold = true;
      await product.save();

      return res.status(200).json({ message: "Product sold!" });
    } else {
      const error = new Error("Not authorized as you're not an admin!");
      error.statusCode = 403;
      throw error;
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.availableOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    const productId = req.params.productId;
    if (loggedInUser.admin) {
      const product = await Product.findById(productId);
      if (!product) {
        const error = new Error("Could not find product.");
        error.statusCode = 404;
        throw error;
      }

      if (!product.sold) {
        const error = new Error("product is already available.");
        error.statusCode = 404;
        throw error;
      }

      product.sold = false;
      product.deactivatedBy = loggedInUser._id;
      await product.save();

      return res.status(200).json({ message: "Product available!" });
    } else {
      const error = new Error("Not authorized as you're not an admin!");
      error.statusCode = 403;
      throw error;
    }
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

    const productId = req.params.productId;

    const product = await Product.findById(productId);

    if (!product) {
      const error = new Error("Could not find product.");
      error.statusCode = 404;
      throw error;
    }

    const oldCategory = await Category.findById(product.category._id);
    if (!oldCategory) {
      const error = new Error("Could not find old category.");
      error.statusCode = 404;
      throw error;
    }

    const imageFile = req.file;
    const name = JSON.parse(req.body.name);
    const description = JSON.parse(req.body.description);
    const price = JSON.parse(req.body.price);
    const categoryId = JSON.parse(req.body.category)._id;
    const categoryEn = JSON.parse(req.body.category).name.en;
    const categoryAr = JSON.parse(req.body.category).name.ar;
    const productAttributes = JSON.parse(req.body.productAttributes);

    if (imageFile) {
      product.image = imageFile.path;
    }

    product.name = name;
    product.description = description;
    product.category._id = categoryId;
    product.category.en = categoryEn;
    product.category.ar = categoryAr;
    product.price = price;
    product.updatedAt = Date.now();
    productAttributes = productAttributes;

    const category = await Category.findById(categoryId);
    if (category.categories && category.categories.length > 0) {
      const error = new Error("choose sub-category to add product in.");
      error.statusCode = 404;
      throw error;
    }

    //////////////////////////
    if (product.store) {
      //// if owner to add to store or to user
      if (loggedInUser.owner) {
        const owner = await Owner.findById(loggedInUser.ownerId);

        if (!owner) {
          const error = new Error("Could not find your ownership.");
          error.statusCode = 404;
          throw error;
        }

        const store = await Store.findById(owner.store);
        if (!store) {
          const error = new Error("You're not an owner of a store.");
          error.statusCode = 404;
          throw error;
        }

        if (!store.equals(product.store)) {
          const error = new Error(
            "You're not an owner of store of this product."
          );
          error.statusCode = 404;
          throw error;
        }
      } else {
        const error = new Error("you're not an owner.");
        error.statusCode = 404;
        throw error;
      }
    }

    if (!product.creator.equals(loggedInUser._id)) {
      const error = new Error("you're not the creator of this product.");
      error.statusCode = 404;
      throw error;
    }

    //////////////////////////
    //// add to new category
    category.products.push(product._id);
    await category.save();

    //////////////////////////
    //// delete product from old category
    oldCategory.products.pull(productId);
    await oldCategory.save();

    await product.save();

    return res.status(200).json({ message: "Product updated!", data: product });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteOne = async (req, res, next) => {
  const loggedInUser = req.user;
  const productId = req.params.productId;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      const error = new Error("Could not find product.");
      error.statusCode = 404;
      throw error;
    }

    const category = await Category.findById(product.category._id);
    if (!category) {
      const error = new Error("Could not find contained category.");
      error.statusCode = 404;
      throw error;
    }

    if (!product.creator.equals(loggedInUser._id) || loggedInUser.admin) {
      category.products.pull(productId);

      const creator = await User.findById(product.creator);

      if (creator.products.includes(productId)) {
        creator.products.pull(productId);
      }
      await creator.save();

      await category.save();

      await Product.findByIdAndDelete(productId);
    } else {
      const error = new Error("Not authorized!");
      error.statusCode = 403;
      throw error;
    }

    return res.status(200).json({ message: "Product deleted!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

///////////////////////////////////////////////////
////////// mobile app only ////////////

exports.getActivatedProducts = async (req, res, next) => {
  try {
    let products = await Product.find({ active: true })
      .populate({
        path: "store",
        model: "Store",
      })
      .populate({
        path: "creator",
        model: "User",
      });
    return res.status(200).json({
      message: "Fetched successfully",
      data: products,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addReview = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product) {
      const error = new Error("Could not find product.");
      error.statusCode = 404;
      throw error;
    }

    const content = req.body.content;
    const rate = req.body.rate;

    if (content != "" || rate != 0) {
      product.reviews.push({
        user: req.user._id,
        content: content,
        rate: rate,
      });

      await product.save();
      return res.status(201).json({
        message: "product review added successfully!",
        data: product,
      });
    } else {
      const error = new Error("Enter rate or content!");
      error.statusCode = 403;
      throw error;
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
