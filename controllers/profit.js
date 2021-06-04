const Profit = require("../models/profit");
const Owner = require("../models/stackholders/owner");
const User = require("../models/stackholders/user");
const Store = require("../models/store");
const Category = require("../models/category");
const Product = require("../models/product");

exports.getAll = async (req, res, next) => {
  try {
    loggedInUser = req.user;
    if (loggedInUser.admin) {
      const profits = await Profit.find()
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
        data: profits,
      });
    } else if (loggedInUser.owner) {
      const owner = await Owner.findById(loggedInUser.ownerId);

      if (owner) {
        const profits = await Profit.find({ store: owner.store })
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
          data: profits,
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

    const profitId = req.params.profitId;
    const profit = await Profit.findById(profitId);
    if (!profit) {
      const error = new Error("Could not find profit.");
      error.statusCode = 404;
      throw error;
    }

    let store;
    let category;
    let product;

    if (profit.store) {
      store = await Store.findById(profit.store);
    }

    if (profit.category) {
      category = await Category.findById(profit.category);
    }

    if (profit.product) {
      product = await Product.findById(profit.product);
    }

    if (loggedInUser.admin) {
      if (profit.store && store) {
        if (store.profit && store.profit.equals(profitId)) {
          store.profitType = "";
          store.profitValue = 0;
          store.profitPercentage = 0;
          store.profit = undefined;
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
              if (product.profit && product.profit.equals(profitId)) {
                product.profitType = "";
                product.profitValue = 0;
                product.profitPercentage = 0;
                product.profit = undefined;

                await product.save();
              }
            }
          }
        }

        await store.save();
      }

      if (profit.category && category) {
        if (category.profit && category.profit.equals(profitId)) {
          category.profitType = "";
          category.profitValue = 0;
          category.profitPercentage = 0;
          category.profit = undefined;
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
              if (product.profit && product.profit.equals(profitId)) {
                product.profitType = "";
                product.profitValue = 0;
                product.profitPercentage = 0;
                product.profit = undefined;

                await product.save();
              }
            }
          }
        }

        await category.save();
      }

      if (profit.product && product) {
        if (product.profit && product.profit.equals(profitId)) {
          product.profitType = "";
          product.profitValue = 0;
          product.profitPercentage = 0;
          product.profit = undefined;
        }

        await product.save();
      }
      await Profit.findByIdAndDelete(profitId);
      return res.status(201).json({
        message: "Store profit deleted successfully!",
        data: store,
      });
    } else if (loggedInUser.owner) {
      if (
        profit.store &&
        store &&
        store.owners.includes(loggedInUser.ownerId)
      ) {
        if (store.profit && store.profit.equals(profitId)) {
          store.profitType = "";
          store.profitValue = 0;
          store.profitPercentage = 0;
          store.profit = undefined;
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
              if (product.profit && product.profit.equals(profitId)) {
                product.profitType = "";
                product.profitValue = 0;
                product.profitPercentage = 0;
                product.profit = undefined;

                await product.save();
              }
            }
          }
        }

        await store.save();
        await Profit.findByIdAndDelete(profitId);
        return res.status(201).json({
          message: "Store profit deleted successfully!",
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
