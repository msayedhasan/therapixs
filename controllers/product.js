const Product = require("../models/product");
const Category = require("../models/category");
const User = require("../models/stackholders/user");

exports.getAll = async (req, res, next) => {
  try {
    let products = await Product.find();
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

    const nameEn = JSON.parse(req.body.name).en;
    const nameAr = JSON.parse(req.body.name).ar;
    const imageFile = req.file;
    const price = JSON.parse(req.body.price);
    const descriptionEn = JSON.parse(req.body.description).en;
    const descriptionAr = JSON.parse(req.body.description).ar;
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
      name: {
        en: nameEn,
        ar: nameAr,
      },
      category: {
        _id: categoryId,
        en: categoryEn,
        ar: categoryAr,
      },
      description: {
        en: descriptionEn,
        ar: descriptionAr,
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
    category.products.push(product._id);
    await category.save();
    await product.save();

    if (loggedInUser.owner) {
      const owner = await Owner.findById(loggedInUser.ownerId);

      if (owner) {
        const store = await Store.findById(owner.store);
        if (store) {
          if (store.owners.includes(loggedInUser.ownerId)) {
            store.products.push(prodcut._id);

            await store.save();
          }
        }
      }
    } else {
      if (loggedInUser.products) {
        loggedInUser.products.push(product._id);
      } else {
        loggedInUser.products = [product._id];
      }
      await loggedInUser.save();
    }

    return res.status(201).json({
      message: "Product added successfully!",
      product: product,
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

    if (product.creator.toString() !== loggedInUser._id || loggedInUser.admin) {
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
////////////////////
exports.updateOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (!loggedInUser.owner || !loggedInUser.manager) {
      const error = new Error(
        "Not authorized as you're not an owner or manager!"
      );
      error.statusCode = 403;
      throw error;
    }

    const name = req.body.name;
    const imageFile = req.file;
    const price = req.body.price;

    const productId = req.params.productId;

    const product = await Product.findById(productId).populate({
      path: "branch",
      model: "Branch",
      populate: {
        path: "store",
        model: "Store",
      },
    });

    if (!product) {
      const error = new Error("Could not find product.");
      error.statusCode = 404;
      throw error;
    }
    ////////////////////
    // check if the user is owner/manager of this store/branch
    ////////////////////
    if (!imageFile) {
      return res.status(422).json({ message: "Attached file is not an image" });
    }

    product.image = imageFile.path;
    product.name = name;
    product.price = price;
    product.updatedAt = Date.now();
    await product.save();

    return res.status(200).json({ message: "Product updated!", data: prodcut });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
