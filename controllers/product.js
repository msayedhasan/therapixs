const Product = require("../models/product");
const ProductProperty = require("../models/productProperty");
const Category = require("../models/category");
const Store = require("../models/store");
const Discount = require("../models/discount");
const Profit = require("../models/profit");
const Order = require("../models/order");
const User = require("../models/stackholders/user");
const Owner = require("../models/stackholders/owner");

const discountController = require("./discount");

const awsDelete = require("../startup/aws-s3-delete");
const schedule = require("node-schedule");

exports.getAll = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      let products = await Product.find()
        .populate({
          path: "properties",
          model: "productProperty",
        })
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
    } else if (loggedInUser.owner) {
      if (loggedInUser.store) {
        let products = await Product.find({ store: loggedInUser.store })
          .populate({
            path: "properties",
            model: "productProperty",
          })
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
      } else {
        return res.status(200).json({
          message: "Fetched successfully",
          data: [],
        });
      }
    } else {
      return res.status(200).json({
        message: "Fetched successfully",
        data: [],
      });
    }
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
    const product = await Product.findById(productId)
      .populate({
        path: "properties",
        model: "productProperty",
      })
      .populate({
        path: "store",
        model: "Store",
        populate: {
          path: "address",
          model: "Place",
        },
      })
      .populate({
        path: "creator",
        model: "User",
      });
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
    if (!loggedInUser.admin && !loggedInUser.owner) {
      // delete photos from aws
      for (let index = 0; index < req.files.length; index++) {
        await awsDelete.delete(req.files[index].location);
      }
      const error = new Error("You're not admin or owner.");
      error.statusCode = 401;
      throw error;
    }

    if (req.files.length === 0) {
      const error = new Error("Add at least one image.");
      error.statusCode = 401;
      throw error;
    }

    const name = JSON.parse(req.body.name);
    const description = JSON.parse(req.body.description);
    const categoryId = JSON.parse(req.body.category)._id;
    const categoryEn = JSON.parse(req.body.category).name.en;
    const categoryAr = JSON.parse(req.body.category).name.ar;
    const properties = JSON.parse(req.body.properties);

    let photos = [];
    for (let index = 0; index < req.files.length; index++) {
      photos.push(req.files[index].location);
    }

    const category = await Category.findById(categoryId);
    if (!category) {
      // delete photos from aws
      for (let index = 0; index < req.files.length; index++) {
        await awsDelete.delete(req.files[index].location);
      }

      const error = new Error("Could not find selected category.");
      error.statusCode = 404;
      throw error;
    }
    if (category.categories && category.categories.length > 0) {
      // delete photos from aws
      for (let index = 0; index < req.files.length; index++) {
        await awsDelete.delete(req.files[index].location);
      }

      const error = new Error("choose sub-category to add product in.");
      error.statusCode = 401;
      throw error;
    }

    let propertiesIds = [];

    for (let index = 0; index < properties.length; index++) {
      const productProperty = new ProductProperty({
        price: properties[index].price,
        qty: properties[index].qty,
        productAttributes: properties[index].productAttributes,
      });

      await productProperty.save();
      propertiesIds.push(productProperty._id);
    }

    const product = new Product({
      photos: photos,
      creator: loggedInUser._id,
      createdAt: Date.now(),
      name: name,
      description: description,
      category: {
        _id: categoryId,
        en: categoryEn,
        ar: categoryAr,
      },
      properties: propertiesIds,
    });

    if (
      category.discountType !== "" ||
      category.discountValue !== 0 ||
      category.discountPercentage !== 0
    ) {
      product.discountType = category.discountType;
      product.discountValue = category.discountValue;
      product.discountPercentage = category.discountPercentage;
      product.discount = category.discount;
    }

    if (
      category.profitType !== "" ||
      category.profitValue !== 0 ||
      category.profitPercentage !== 0
    ) {
      product.profitType = category.profitType;
      product.profitValue = category.profitValue;
      product.profitPercentage = category.profitPercentage;
      product.profit = category.profit;
    }

    if (loggedInUser.owner) {
      const owner = await Owner.findById(loggedInUser.ownerId);

      if (!owner) {
        // delete photos from aws
        for (let index = 0; index < req.files.length; index++) {
          await awsDelete.delete(req.files[index].location);
        }

        const error = new Error("Could not find your ownership.");
        error.statusCode = 404;
        throw error;
      }

      const store = await Store.findById(owner.store);
      if (!store) {
        // delete photos from aws
        for (let index = 0; index < req.files.length; index++) {
          await awsDelete.delete(req.files[index].location);
        }

        const error = new Error("You're not an owner of a store.");
        error.statusCode = 403;
        throw error;
      }

      if (!store.active || store.locked) {
        // delete photos from aws
        for (let index = 0; index < req.files.length; index++) {
          await awsDelete.delete(req.files[index].location);
        }

        const error = new Error("store isn't active or locked.");
        error.statusCode = 400;
        throw error;
      }

      const discount = await Discount.findOne({
        $and: [{ store: store }, { category: categoryId }],
      });

      if (discount) {
        product.discountType = discount.discountType;
        product.discountValue = discount.discountValue;
        product.discountPercentage = discount.discountPercentage;
        product.discount = discount._id;
      }

      const profit = await Profit.findOne({
        $and: [{ store: store }, { category: categoryId }],
      });

      if (profit) {
        product.profitType = profit.profitType;
        product.profitValue = profit.profitValue;
        product.profitPercentage = profit.profitPercentage;
        product.profit = profit._id;
      }

      product.store = store._id;
      if (!store.products) {
        store.products = [];
      }
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

    if (!category.products) {
      category.products = [];
    }
    category.products.push(product._id);
    await category.save();
    await product.save();

    return res.status(201).json({
      message: "Product added successfully!",
      data: product,
    });
  } catch (err) {
    console.log(err);
    for (let index = 0; index < req.files.length; index++) {
      await awsDelete.delete(req.files[index].location);
    }

    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    let photos = [];
    if (req.files && req.files > 0) {
      for (let index = 0; index < req.files.length; index++) {
        photos.push(req.files[index].location);
      }
    }
    const loggedInUser = req.user;
    if (!loggedInUser.admin && !loggedInUser.owner) {
      if (req.files && req.files > 0) {
        // delete photos from aws
        for (let index = 0; index < req.files.length; index++) {
          await awsDelete.delete(req.files[index].location);
        }
      }
      const error = new Error("You're not admin or owner.");
      error.statusCode = 401;
      throw error;
    }

    const productId = req.params.productId;

    const product = await Product.findById(productId);

    if (!product) {
      if (req.files && req.files > 0) {
        // delete photos from aws
        for (let index = 0; index < req.files.length; index++) {
          await awsDelete.delete(req.files[index].location);
        }
      }

      const error = new Error("Could not find product.");
      error.statusCode = 404;
      throw error;
    }

    const name = JSON.parse(req.body.name);
    const description = JSON.parse(req.body.description);
    const properties = JSON.parse(req.body.properties);

    const originalPhotos = JSON.parse(req.body.originalPhotos);
    // product.photos = photos.concat(originalPhotos);

    product.name = name;
    product.description = description;
    product.updatedAt = Date.now();

    if (product.properties.length > properties.length) {
      for (let index = 0; index < product.properties.length; index++) {
        let obj = properties.find(
          (e) => e._id === product.properties[index].toString()
        );
        if (!obj) {
          const prodProp = await ProductProperty.findById(
            product.properties[index]
          );
          if (prodProp) {
            await ProductProperty.findByIdAndDelete(prodProp);
          }
          product.properties.pull(product.properties[index]);
        }
      }
    }
    for (let index = 0; index < properties.length; index++) {
      if (properties[index]._id) {
        const prodProp = await ProductProperty.findById(properties[index]._id);
        if (prodProp) {
          prodProp.price = properties[index].price;
          prodProp.qty = properties[index].qty;
          prodProp.productAttributes = properties[index].productAttributes;

          await prodProp.save();
        }
      } else {
        const productProperty = new ProductProperty({
          price: properties[index].price,
          qty: properties[index].qty,
          productAttributes: properties[index].productAttributes,
        });

        await productProperty.save();
        product.properties.push(productProperty._id);
      }
    }

    if (product.store) {
      //////////////////////////
      //// if owner to add to store or to user
      if (loggedInUser.owner) {
        const owner = await Owner.findById(loggedInUser.ownerId);

        if (!owner) {
          if (req.files && req.files > 0) {
            // delete photos from aws
            for (let index = 0; index < req.files.length; index++) {
              await awsDelete.delete(req.files[index].location);
            }
          }

          const error = new Error("Could not find your ownership.");
          error.statusCode = 404;
          throw error;
        }

        const store = await Store.findById(owner.store);
        if (!store) {
          if (req.files && req.files > 0) {
            // delete photos from aws
            for (let index = 0; index < req.files.length; index++) {
              await awsDelete.delete(req.files[index].location);
            }
          }

          const error = new Error("You're not an owner of a store.");
          error.statusCode = 404;
          throw error;
        }

        if (!store.equals(product.store)) {
          if (req.files && req.files > 0) {
            // delete photos from aws
            for (let index = 0; index < req.files.length; index++) {
              await awsDelete.delete(req.files[index].location);
            }
          }

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
      // delete photos from aws
      for (let index = 0; index < req.files.length; index++) {
        await awsDelete.delete(req.files[index].location);
      }

      const error = new Error("you're not the creator of this product.");
      error.statusCode = 404;
      throw error;
    }

    await product.save();

    return res.status(200).json({ message: "Product updated!", data: product });
  } catch (err) {
    if (req.files && req.files > 0) {
      // delete photos from aws
      for (let index = 0; index < req.files.length; index++) {
        await awsDelete.delete(req.files[index].location);
      }
    }
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
        error.statusCode = 401;
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
        error.statusCode = 401;
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

// delete the product should delete it from any unshipped order
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
      if (category.products.includes(productId)) {
        category.products.pull(productId);
      }

      const creator = await User.findById(product.creator);
      if (creator && creator.products) {
        if (creator.products.includes(productId)) {
          creator.products.pull(productId);
        }
      }

      if (product.store) {
        const store = await Store.findById(product.store);
        if (!store) {
          const error = new Error("Could not find contained store.");
          error.statusCode = 404;
          throw error;
        }

        if (store.products.includes(productId)) {
          store.products.pull(productId);
        }
        await store.save();
      }
      // delete photos from aws
      for (let index = 0; index < product.photos.length; index++) {
        await awsDelete.delete(product.photos[index]);
      }

      for (let index = 0; index < product.properties.length; index++) {
        const prop = await ProductProperty.findById(product.properties[index]);
        if (prop) {
          await ProductProperty.findByIdAndDelete(product.properties[index]);
        }
      }

      if (creator) {
        await creator.save();
      }

      await category.save();

      await Product.findByIdAndDelete(productId);
    } else {
      const error = new Error("Not authorized!");
      error.statusCode = 403;
      throw error;
    }

    return res.status(200).json({ message: "Product deleted!" });
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addProductToStore = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      const storeId = req.params.storeId;
      const store = await Store.findById(storeId);

      if (!store) {
        const error = new Error("Could not find store.");
        error.statusCode = 404;
        throw error;
      }

      if (store.locked || !store.active) {
        const error = new Error("Store isn't active or locked.");
        error.statusCode = 404;
        throw error;
      }

      const productId = req.params.productId;
      const product = await Product.findById(productId);

      if (!product) {
        const error = new Error("Could not find product.");
        error.statusCode = 404;
        throw error;
      }

      if (product.store) {
        const error = new Error("This product is already in store.");
        error.statusCode = 400;
        throw error;
      }

      const discount = await Discount.findOne({
        $and: [{ store: store }, { category: product.category._id }],
      });

      if (discount) {
        product.discountType = discount.discountType;
        product.discountValue = discount.discountValue;
        product.discountPercentage = discount.discountPercentage;
        product.discount = discount._id;
      } else {
        product.discountType = store.discountType;
        product.discountValue = store.discountValue;
        product.discountPercentage = store.discountPercentage;
        product.discount = store._id;
      }

      const profit = await Profit.findOne({
        $and: [{ store: store }, { category: product.category._id }],
      });

      if (profit) {
        product.profitType = profit.profitType;
        product.profitValue = profit.profitValue;
        product.profitPercentage = profit.profitPercentage;
        product.profit = profit._id;
      } else {
        product.profitType = store.profitType;
        product.profitValue = store.profitValue;
        product.profitPercentage = store.profitPercentage;
        product.profit = store._id;
      }

      product.store = storeId;

      await product.save();
      store.products.push(product._id);
      await store.save();

      return res.status(201).json({
        message: "Product added successfully!",
        data: product,
      });
    } else {
      const error = new Error("Not authorized!");
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

exports.addDiscount = async (req, res, next) => {
  try {
    const loggedInUser = req.user;

    const productId = req.params.productId;
    const product = await Product.findById(productId);

    if (!product) {
      const error = new Error("Could not find product.");
      error.statusCode = 404;
      throw error;
    }

    const discountType = req.body.discountType;
    const discountValue = req.body.discountValue;
    const discountPercentage = req.body.discountPercentage;
    const validTill = req.body.validTill;

    if (
      discountType === "" ||
      (discountValue === 0 && discountPercentage === 0)
    ) {
      const error = new Error("No discount to add.");
      error.statusCode = 400;
      throw error;
    }

    if (loggedInUser.admin) {
      const discount = new Discount({
        discountOn: "product",
        product: productId,
        discountType: discountType,
        discountValue: discountValue,
        discountPercentage: discountPercentage,
        creator: loggedInUser._id,
        createdAt: Date.now(),
        validTill: validTill,
      });
      await discount.save();

      product.discountType = discountType;
      product.discountValue = discountValue;
      product.discountPercentage = discountPercentage;
      product.discount = discount._id;

      await product.save();

      if (validTill) {
        let date = new Date(validTill);
        schedule.scheduleJob(date, () => {
          discountController.deleteDiscountAtTime(discount._id);
        });
      }

      return res.status(201).json({
        message: "Product discount added successfully!",
        data: product,
      });
    } else {
      if (product.store) {
        const store = await Store.findById(product.store);

        if (loggedInUser.owner) {
          if (store.owners.includes(loggedInUser.ownerId)) {
            const discount = new Discount({
              discountOn: "product",
              product: productId,
              discountType: discountType,
              discountValue: discountValue,
              discountPercentage: discountPercentage,
              creator: loggedInUser._id,
              createdAt: Date.now(),
              validTill: validTill,
            });
            await discount.save();

            product.discountType = discountType;
            product.discountValue = discountValue;
            product.discountPercentage = discountPercentage;
            product.discount = discount._id;

            await product.save();

            if (validTill) {
              let date = new Date(validTill);
              schedule.scheduleJob(date, () => {
                discountController.deleteDiscountAtTime(discount._id);
              });
            }
            return res.status(201).json({
              message: "product discount added successfully!",
              data: store,
            });
          } else {
            const error = new Error(
              "Not authorized as you're not an owner of this store!"
            );
            error.statusCode = 403;
            throw error;
          }
        } else {
          const error = new Error("Not authorized as you're not an owner!");
          error.statusCode = 403;
          throw error;
        }
      } else {
        if (product.creator.equals(loggedInUser._id)) {
          const discount = new Discount({
            discountOn: "product",
            product: productId,
            discountType: discountType,
            discountValue: discountValue,
            discountPercentage: discountPercentage,
            creator: loggedInUser._id,
            createdAt: Date.now(),
            validTill: validTill,
          });
          await discount.save();

          product.discountType = discountType;
          product.discountValue = discountValue;
          product.discountPercentage = discountPercentage;
          product.discount = discount._id;

          await product.save();

          if (validTill) {
            let date = new Date(validTill);
            schedule.scheduleJob(date, () => {
              discountController.deleteDiscountAtTime(discount._id);
            });
          }

          return res.status(201).json({
            message: "Product discount added successfully!",
            data: product,
          });
        } else {
          const error = new Error(
            "Not authorized as you're not the creator of this product!"
          );
          error.statusCode = 403;
          throw error;
        }
      }
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteDiscount = async (req, res, next) => {
  try {
    const loggedInUser = req.user;

    const productId = req.params.productId;
    const product = await Product.findById(productId);

    if (!product) {
      const error = new Error("Could not find product.");
      error.statusCode = 404;
      throw error;
    }
    const discountId = product.discount;
    const discount = await Discount.findById(discountId);

    if (!discount) {
      const error = new Error("Could not find discount.");
      error.statusCode = 404;
      throw error;
    }

    if (loggedInUser.admin) {
      if (product.discount && product.discount.equals(discountId)) {
        product.discountType = "";
        product.discountValue = 0;
        product.discountPercentage = 0;
        product.discount = undefined;
      }

      await product.save();

      await Discount.findByIdAndDelete(discountId);
      return res.status(201).json({
        message: "Product discount deleted successfully!",
        data: product,
      });
    }
    if (product.store) {
      const store = await Store.findById(product.store);

      if (loggedInUser.owner) {
        if (store.owners.includes(loggedInUser.ownerId)) {
          if (product.discount && product.discount.equals(discountId)) {
            product.discountType = "";
            product.discountValue = 0;
            product.discountPercentage = 0;
            product.discount = undefined;
          }

          await product.save();

          await Discount.findByIdAndDelete(discountId);
          return res.status(201).json({
            message: "Product discount deleted successfully!",
            data: product,
          });
        } else {
          const error = new Error(
            "Not authorized as you're not an owner of this store!"
          );
          error.statusCode = 403;
          throw error;
        }
      } else {
        const error = new Error("Not authorized as you're not an owner!");
        error.statusCode = 403;
        throw error;
      }
    } else {
      if (product.creator.equals(loggedInUser._id)) {
        if (product.discount && product.discount.equals(discountId)) {
          product.discountType = "";
          product.discountValue = 0;
          product.discountPercentage = 0;
          product.discount = undefined;
        }

        await product.save();

        await Discount.findByIdAndDelete(discountId);
        return res.status(201).json({
          message: "Product discount deleted successfully!",
          data: product,
        });
      } else {
        const error = new Error(
          "Not authorized as you're not the creator of this product!"
        );
        error.statusCode = 403;
        throw error;
      }
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addProfit = async (req, res, next) => {
  try {
    const loggedInUser = req.user;

    const productId = req.params.productId;
    const product = await Product.findById(productId);

    if (!product) {
      const error = new Error("Could not find product.");
      error.statusCode = 404;
      throw error;
    }

    const profitType = req.body.profitType;
    const profitValue = req.body.profitValue;
    const profitPercentage = req.body.profitPercentage;

    if (profitType === "" || (profitValue === 0 && profitPercentage === 0)) {
      const error = new Error("No profit to add.");
      error.statusCode = 400;
      throw error;
    }

    if (loggedInUser.admin) {
      const profit = new Profit({
        profitOn: "product",
        product: productId,
        profitType: profitType,
        profitValue: profitValue,
        profitPercentage: profitPercentage,
        creator: loggedInUser._id,
        createdAt: Date.now(),
      });
      await profit.save();

      product.profitType = profitType;
      product.profitValue = profitValue;
      product.profitPercentage = profitPercentage;
      product.profit = profit._id;

      await product.save();

      return res.status(201).json({
        message: "Product profit added successfully!",
        data: product,
      });
    } else {
      if (product.store) {
        const store = await Store.findById(product.store);

        if (loggedInUser.owner) {
          if (store.owners.includes(loggedInUser.ownerId)) {
            const profit = new Profit({
              profitOn: "product",
              product: productId,
              profitType: profitType,
              profitValue: profitValue,
              profitPercentage: profitPercentage,
              creator: loggedInUser._id,
              createdAt: Date.now(),
            });
            await profit.save();

            product.profitType = profitType;
            product.profitValue = profitValue;
            product.profitPercentage = profitPercentage;
            product.profit = profit._id;

            await product.save();

            return res.status(201).json({
              message: "product profit added successfully!",
              data: store,
            });
          } else {
            const error = new Error(
              "Not authorized as you're not an owner of this store!"
            );
            error.statusCode = 403;
            throw error;
          }
        } else {
          const error = new Error("Not authorized as you're not an owner!");
          error.statusCode = 403;
          throw error;
        }
      } else {
        if (product.creator.equals(loggedInUser._id)) {
          const profit = new Profit({
            profitOn: "product",
            product: productId,
            profitType: profitType,
            profitValue: profitValue,
            profitPercentage: profitPercentage,
            creator: loggedInUser._id,
            createdAt: Date.now(),
          });
          await profit.save();

          product.profitType = profitType;
          product.profitValue = profitValue;
          product.profitPercentage = profitPercentage;
          product.profit = profit._id;

          await product.save();

          return res.status(201).json({
            message: "Product profit added successfully!",
            data: product,
          });
        } else {
          const error = new Error(
            "Not authorized as you're not the creator of this product!"
          );
          error.statusCode = 403;
          throw error;
        }
      }
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteProfit = async (req, res, next) => {
  try {
    const loggedInUser = req.user;

    const productId = req.params.productId;
    const product = await Product.findById(productId);

    if (!product) {
      const error = new Error("Could not find product.");
      error.statusCode = 404;
      throw error;
    }
    const profitId = product.profit;
    const profit = await Profit.findById(profitId);

    if (!profit) {
      const error = new Error("Could not find profit.");
      error.statusCode = 404;
      throw error;
    }

    if (loggedInUser.admin) {
      if (product.profit && product.profit.equals(profitId)) {
        product.profitType = "";
        product.profitValue = 0;
        product.profitPercentage = 0;
        product.profit = undefined;
      }

      await product.save();

      await Profit.findByIdAndDelete(profitId);
      return res.status(201).json({
        message: "Product profit deleted successfully!",
        data: product,
      });
    }
    if (product.store) {
      const store = await Store.findById(product.store);

      if (loggedInUser.owner) {
        if (store.owners.includes(loggedInUser.ownerId)) {
          if (product.profit && product.profit.equals(profitId)) {
            product.profitType = "";
            product.profitValue = 0;
            product.profitPercentage = 0;
            product.profit = undefined;
          }

          await product.save();

          await Profit.findByIdAndDelete(profitId);
          return res.status(201).json({
            message: "Product profit deleted successfully!",
            data: product,
          });
        } else {
          const error = new Error(
            "Not authorized as you're not an owner of this store!"
          );
          error.statusCode = 403;
          throw error;
        }
      } else {
        const error = new Error("Not authorized as you're not an owner!");
        error.statusCode = 403;
        throw error;
      }
    } else {
      if (product.creator.equals(loggedInUser._id)) {
        if (product.profit && product.profit.equals(profitId)) {
          product.profitType = "";
          product.profitValue = 0;
          product.profitPercentage = 0;
          product.profit = undefined;
        }

        await product.save();

        await Profit.findByIdAndDelete(profitId);
        return res.status(201).json({
          message: "Product profit deleted successfully!",
          data: product,
        });
      } else {
        const error = new Error(
          "Not authorized as you're not the creator of this product!"
        );
        error.statusCode = 403;
        throw error;
      }
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

//*//*//*//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/ */
// Dashboard
exports.getBestSelling = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      let products = await Product.find()
        .populate({
          path: "properties",
          model: "productProperty",
        })
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
    } else if (loggedInUser.owner) {
      if (loggedInUser.store) {
        let products = await Product.find({ store: loggedInUser.store })
          .populate({
            path: "properties",
            model: "productProperty",
          })
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
      } else {
        return res.status(200).json({
          message: "Fetched successfully",
          data: [],
        });
      }
    } else {
      return res.status(200).json({
        message: "Fetched successfully",
        data: [],
      });
    }
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
        path: "properties",
        model: "productProperty",
      })
      .populate({
        path: "store",
        model: "Store",
        populate: { path: "address", model: "Place" },
      })
      .populate({
        path: "creator",
        model: "User",
        // populate: { path: "address", model: "Place" },
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

exports.getActivatedProductsWithDiscount = async (req, res, next) => {
  try {
    const discountId = req.params.discountId;
    let products = await Product.find({ active: true, discount: discountId })
      .populate({
        path: "properties",
        model: "productProperty",
      })
      .populate({
        path: "store",
        model: "Store",
        populate: { path: "address", model: "Place" },
      })
      .populate({
        path: "creator",
        model: "User",
        // populate: { path: "address", model: "Place" },
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
    const loggedInUser = req.user;
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product) {
      const error = new Error("Could not find product to review.");
      error.statusCode = 404;
      throw error;
    }

    const orderId = req.body.orderId;
    const order = await Order.findById(orderId);
    if (!order) {
      const error = new Error("Could not find order to review.");
      error.statusCode = 404;
      throw error;
    }

    // check if the user already ordered this product
    let prod = order.products.find((e) => e.product.equals(productId));

    if (prod) {
      let previousReview = product.reviews.find((e) =>
        e.user.equals(loggedInUser._id)
      );

      const content = req.body.content;
      const rate = req.body.rate;

      if (previousReview) {
        if (content != "" || rate != 0) {
          product.reviews[product.reviews.indexOf(previousReview)] = {
            user: loggedInUser._id,
            content: content,
            rate: rate,
          };

          await product.save();
          return res.status(201).json({
            message: "product review added successfully!",
            data: product,
          });
        } else {
          const error = new Error("Enter rate or content!");
          error.statusCode = 400;
          throw error;
        }
      } else {
        if (content != "" || rate != 0) {
          product.reviews.push({
            user: loggedInUser._id,
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
          error.statusCode = 400;
          throw error;
        }
      }
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.appAddOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (!loggedInUser.admin && !loggedInUser.owner) {
      // delete photos from aws
      for (let index = 0; index < req.files.length; index++) {
        await awsDelete.delete(req.files[index].location);
      }
      const error = new Error("You're not admin or owner.");
      error.statusCode = 401;
      throw error;
    }

    if (req.files.length === 0) {
      const error = new Error("Add at least one image.");
      error.statusCode = 401;
      throw error;
    }
    const name = req.body.name;
    const description = req.body.description;
    const categoryId = req.body.category._id;
    const categoryEn = req.body.category.name.en;
    const categoryAr = req.body.category.name.ar;
    const properties = req.body.properties;

    let photos = [];
    for (let index = 0; index < req.files.length; index++) {
      photos.push(req.files[index].location);
    }

    const category = await Category.findById(categoryId);
    if (!category) {
      // delete photos from aws
      for (let index = 0; index < req.files.length; index++) {
        await awsDelete.delete(req.files[index].location);
      }

      const error = new Error("Could not find selected category.");
      error.statusCode = 404;
      throw error;
    }
    if (category.categories && category.categories.length > 0) {
      // delete photos from aws
      for (let index = 0; index < req.files.length; index++) {
        await awsDelete.delete(req.files[index].location);
      }

      const error = new Error("choose sub-category to add product in.");
      error.statusCode = 401;
      throw error;
    }

    let propertiesIds = [];

    for (let index = 0; index < properties.length; index++) {
      const productProperty = new ProductProperty({
        price: properties[index].price,
        qty: properties[index].qty,
        productAttributes: properties[index].productAttributes,
      });

      await productProperty.save();
      propertiesIds.push(productProperty._id);
    }

    const product = new Product({
      photos: photos,
      creator: loggedInUser._id,
      createdAt: Date.now(),
      name: name,
      description: description,
      category: {
        _id: categoryId,
        en: categoryEn,
        ar: categoryAr,
      },
      properties: propertiesIds,
    });

    if (
      category.discountType !== "" ||
      category.discountValue !== 0 ||
      category.discountPercentage !== 0
    ) {
      product.discountType = category.discountType;
      product.discountValue = category.discountValue;
      product.discountPercentage = category.discountPercentage;
      product.discount = category.discount;
    }

    if (
      category.profitType !== "" ||
      category.profitValue !== 0 ||
      category.profitPercentage !== 0
    ) {
      product.profitType = category.profitType;
      product.profitValue = category.profitValue;
      product.profitPercentage = category.profitPercentage;
      product.profit = category.profit;
    }

    if (loggedInUser.owner) {
      const owner = await Owner.findById(loggedInUser.ownerId);

      if (!owner) {
        // delete photos from aws
        for (let index = 0; index < req.files.length; index++) {
          await awsDelete.delete(req.files[index].location);
        }

        const error = new Error("Could not find your ownership.");
        error.statusCode = 404;
        throw error;
      }

      const store = await Store.findById(owner.store);
      if (!store) {
        // delete photos from aws
        for (let index = 0; index < req.files.length; index++) {
          await awsDelete.delete(req.files[index].location);
        }

        const error = new Error("You're not an owner of a store.");
        error.statusCode = 403;
        throw error;
      }

      if (!store.active || store.locked) {
        // delete photos from aws
        for (let index = 0; index < req.files.length; index++) {
          await awsDelete.delete(req.files[index].location);
        }

        const error = new Error("store isn't active or locked.");
        error.statusCode = 400;
        throw error;
      }

      const discount = await Discount.findOne({
        $and: [{ store: store }, { category: categoryId }],
      });

      if (discount) {
        product.discountType = discount.discountType;
        product.discountValue = discount.discountValue;
        product.discountPercentage = discount.discountPercentage;
        product.discount = discount._id;
      }

      const profit = await Profit.findOne({
        $and: [{ store: store }, { category: categoryId }],
      });

      if (profit) {
        product.profitType = profitType.profitType;
        product.profitValue = profitValue.profitValue;
        product.profitPercentage = profitPercentage.profitPercentage;
        product.profit = profit._id;
      }

      product.store = store._id;
      if (!store.products) {
        store.products = [];
      }
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

    if (!category.products) {
      category.products = [];
    }
    category.products.push(product._id);
    await category.save();
    await product.save();

    return res.status(201).json({
      message: "Product added successfully!",
      data: product,
    });
  } catch (err) {
    console.log(err);
    for (let index = 0; index < req.files.length; index++) {
      await awsDelete.delete(req.files[index].location);
    }

    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
