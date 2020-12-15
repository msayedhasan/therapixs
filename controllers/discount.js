const Discount = require("../models/discount");
const Owner = require("../models/stackholders/owner");
const User = require("../models/stackholders/user");
const Store = require("../models/store");
const Ad = require("../models/ad");
const Category = require("../models/category");
const Product = require("../models/product");
const Bike = require("../models/bike");

const awsDelete = require("../startup/aws-s3-delete");

exports.getAll = async (req, res, next) => {
  try {
    loggedInUser = req.user;
    if (loggedInUser.admin) {
      const discounts = await Discount.find()
        .populate({
          path: "store",
          model: "Store",
        })
        .populate({
          path: "product",
          model: "Product",
        })
        .populate({
          path: "bike",
          model: "Bike",
        })
        .populate({
          path: "category",
          model: "Category",
        });

      return res.status(200).json({
        message: "Success",
        data: discounts,
      });
    } else if (loggedInUser.owner) {
      const owner = await Owner.findById(loggedInUser.ownerId);

      if (owner) {
        const discounts = await Discount.find({ store: owner.store })
          .populate({
            path: "store",
            model: "Store",
          })
          .populate({
            path: "product",
            model: "Product",
          })
          .populate({
            path: "category",
            model: "Category",
          });

        return res.status(200).json({
          message: "Success",
          data: discounts,
        });
      } else {
        const error = new Error("Not authorized!");
        error.statusCode = 403;
        throw error;
      }
    } else {
      const error = new Error("Not authorized as you're not admin or owner!");
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
  try {
    const loggedInUser = req.user;

    const discountId = req.params.discountId;
    const discount = await Discount.findById(discountId);
    if (!discount) {
      const error = new Error("Could not find discount.");
      error.statusCode = 404;
      throw error;
    }

    let store;
    let category;
    let product;
    let bike;

    if (discount.store) {
      store = await Store.findById(discount.store);
    }

    if (discount.category) {
      category = await Category.findById(discount.category);
    }

    if (discount.product) {
      product = await Product.findById(discount.product);
    }

    if (discount.bike) {
      bike = await Bike.findById(discount.bike);
    }

    if (loggedInUser.admin) {
      if (discount.store && store) {
        if (store.discount && store.discount.equals(discountId)) {
          store.discountType = "";
          store.discountValue = 0;
          store.discountPercentage = 0;
          store.discount = undefined;
        }

        if (store.products && store.products.length > 0) {
          for (
            let productIndex = 0;
            productIndex < store.products.length;
            productIndex++
          ) {
            const productId = store.products[productIndex];
            let product = await Product.findById(productId);
            if (product) {
              if (product.discount && product.discount.equals(discountId)) {
                product.discountType = "";
                product.discountValue = 0;
                product.discountPercentage = 0;
                product.discount = undefined;

                await product.save();
              }
            }
          }
        }

        await store.save();
      }

      if (discount.category && category) {
        if (category.discount && category.discount.equals(discountId)) {
          category.discountType = "";
          category.discountValue = 0;
          category.discountPercentage = 0;
          category.discount = undefined;
        }

        if (category.products && category.products.length > 0) {
          for (
            let productIndex = 0;
            productIndex < category.products.length;
            productIndex++
          ) {
            const productId = category.products[productIndex];
            let product = await Product.findById(productId);
            if (product) {
              if (product.discount && product.discount.equals(discountId)) {
                product.discountType = "";
                product.discountValue = 0;
                product.discountPercentage = 0;
                product.discount = undefined;

                await product.save();
              }
            }
          }
        }

        await category.save();
      }

      if (discount.product && product) {
        if (product.discount && product.discount.equals(discountId)) {
          product.discountType = "";
          product.discountValue = 0;
          product.discountPercentage = 0;
          product.discount = undefined;
        }

        await product.save();
      }

      if (discount.bike && bike) {
        if (bike.discount && bike.discount.equals(discountId)) {
          bike.discountType = "";
          bike.discountValue = 0;
          bike.discountPercentage = 0;
          bike.discount = undefined;
        }

        await bike.save();
      }
      const existingAd = await Ad.findOne({ discount: discountId });
      if (existingAd) {
        await Ad.findByIdAndDelete(existingAd._id);
      }

      await Discount.findByIdAndDelete(discountId);
      return res.status(201).json({
        message: "Store discount deleted successfully!",
        data: store,
      });
    } else if (loggedInUser.owner) {
      if (
        discount.store &&
        store &&
        store.owners.includes(loggedInUser.ownerId)
      ) {
        if (store.discount && store.discount.equals(discountId)) {
          store.discountType = "";
          store.discountValue = 0;
          store.discountPercentage = 0;
          store.discount = undefined;
        }

        if (store.products && store.products.length > 0) {
          for (
            let productIndex = 0;
            productIndex < store.products.length;
            productIndex++
          ) {
            const productId = store.products[productIndex];
            let product = await Product.findById(productId);
            if (product) {
              if (product.discount && product.discount.equals(discountId)) {
                product.discountType = "";
                product.discountValue = 0;
                product.discountPercentage = 0;
                product.discount = undefined;

                await product.save();
              }
            }
          }
        }

        await store.save();
        const existingAd = await Ad.findOne({ discount: discountId });
        if (existingAd) {
          await Ad.findByIdAndDelete(existingAd._id);
        }

        await Discount.findByIdAndDelete(discountId);
        return res.status(201).json({
          message: "Store discount deleted successfully!",
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

exports.addAdvertise = async (req, res, next) => {
  let image = "";
  if (req.file) {
    image = req.file.location;
  } else {
    const error = new Error("Advertise image is required.");
    error.statusCode = 400;
    throw error;
  }
  try {
    const loggedInUser = req.user;

    if (loggedInUser.admin) {
      const discountId = req.params.discountId;
      const discount = await Discount.findById(discountId);
      if (!discount) {
        if (req.file) {
          await awsDelete.delete(req.file.location);
        }
        const error = new Error("Could not find discount.");
        error.statusCode = 404;
        throw error;
      }

      const existingAd = await Ad.findOne({ discount: discountId });
      if (existingAd) {
        if (req.file) {
          await awsDelete.delete(existingAd.image);
        }
        existingAd.image = image;
        await existingAd.save();
      } else {
        const ad = new Ad({
          discount: discountId,
          image: image,
          creator: loggedInUser._id,
          createdAt: Date.now(),
        });

        await ad.save();
      }

      return res.status(200).json({
        message: "Success",
        data: "Done",
      });
    } else {
      if (req.file) {
        await awsDelete.delete(req.file.location);
      }
      const error = new Error("Not authorized!");
      error.statusCode = 403;
      throw error;
    }
  } catch (err) {
    if (req.file) {
      await awsDelete.delete(req.file.location);
    }
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

//**//**//**//**//** */ */ */ */ */
// schedule task
exports.deleteDiscountAtTime = async (discountId) => {
  try {
    const discount = await Discount.findById(discountId);

    if (discount) {
      let store;
      let category;
      let product;
      let bike;

      if (discount.store) {
        store = await Store.findById(discount.store);
      }

      if (discount.category) {
        category = await Category.findById(discount.category);
      }

      if (discount.product) {
        product = await Product.findById(discount.product);
      }

      if (discount.bike) {
        bike = await Bike.findById(discount.bike);
      }

      if (discount.store && store) {
        if (store.discount && store.discount.equals(discountId)) {
          store.discountType = "";
          store.discountValue = 0;
          store.discountPercentage = 0;
          store.discount = undefined;
        }

        if (store.products && store.products.length > 0) {
          for (
            let productIndex = 0;
            productIndex < store.products.length;
            productIndex++
          ) {
            const productId = store.products[productIndex];
            let product = await Product.findById(productId);
            if (product) {
              if (product.discount && product.discount.equals(discountId)) {
                product.discountType = "";
                product.discountValue = 0;
                product.discountPercentage = 0;
                product.discount = undefined;

                await product.save();
              }
            }
          }
        }

        await store.save();
      }

      if (discount.category && category) {
        if (category.discount && category.discount.equals(discountId)) {
          category.discountType = "";
          category.discountValue = 0;
          category.discountPercentage = 0;
          category.discount = undefined;
        }

        if (category.products && category.products.length > 0) {
          for (
            let productIndex = 0;
            productIndex < category.products.length;
            productIndex++
          ) {
            const productId = category.products[productIndex];
            let product = await Product.findById(productId);
            if (product) {
              if (product.discount && product.discount.equals(discountId)) {
                product.discountType = "";
                product.discountValue = 0;
                product.discountPercentage = 0;
                product.discount = undefined;

                await product.save();
              }
            }
          }
        }

        await category.save();
      }

      if (discount.product && product) {
        if (product.discount && product.discount.equals(discountId)) {
          product.discountType = "";
          product.discountValue = 0;
          product.discountPercentage = 0;
          product.discount = undefined;
        }

        await product.save();
      }

      if (discount.bike && bike) {
        if (bike.discount && bike.discount.equals(discountId)) {
          bike.discountType = "";
          bike.discountValue = 0;
          bike.discountPercentage = 0;
          bike.discount = undefined;
        }

        await bike.save();
      }
      const existingAd = await Ad.findOne({ discount: discountId });
      if (existingAd) {
        await Ad.findByIdAndDelete(existingAd._id);
      }

      await Discount.findByIdAndDelete(discountId);
    }
  } catch (err) {
    console.log("deleteDiscountAtTime failed");
    console.log(err);
  }
};
