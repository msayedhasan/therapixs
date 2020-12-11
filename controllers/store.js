const Product = require("../models/product");
const Store = require("../models/store");
const Discount = require("../models/discount");
const Profit = require("../models/profit");
const Owner = require("../models/stackholders/owner");
const User = require("../models/stackholders/user");

const awsDelete = require("../startup/aws-s3-delete");

exports.getAll = async (req, res, next) => {
  try {
    const loggedInUser = req.user;

    if (loggedInUser.admin) {
      const stores = await Store.find()
        .populate({
          path: "owners",
          model: "Owner",
        })
        .populate({
          path: "address",
          model: "Place",
        })
        .populate({
          path: "orders",
          model: "Order",
        });

      return res.status(200).json({
        message: "Success",
        data: stores,
      });
    } else if (loggedInUser.owner) {
      const stores = await Store.find({ owners: loggedInUser.ownerId })
        .populate({
          path: "owners",
          model: "Owner",
        })
        .populate({
          path: "address",
          model: "Place",
        })
        .populate({
          path: "orders",
          model: "Order",
        });

      return res.status(200).json({
        message: "Success",
        data: stores,
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
  const storeId = req.params.storeId;
  try {
    const store = await Store.findById(storeId)
      .populate({
        path: "owners",
        model: "Owner",
      })
      .populate({
        path: "address",
        model: "Place",
      });
    if (!store) {
      const error = new Error("Could not find store.");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({ message: "Success", data: store });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addOne = async (req, res, next) => {
  let image;
  if (req.file) {
    image = req.file.location;
  }
  try {
    const loggedInUser = req.user;

    if (loggedInUser.admin) {
      const name = JSON.parse(req.body.name);
      const address = JSON.parse(req.body.address);
      const detailedAddress = JSON.parse(req.body.detailedAddress);

      const existedStore = await Store.findOne({ name: name });
      if (existedStore) {
        await awsDelete.delete(image);

        const error = new Error("Store with this name is already exists");
        error.statusCode = 400;
        throw error;
      }

      const store = new Store({
        name: name,
        address: address,
        detailedAddress: detailedAddress,
        image: image,
        creator: loggedInUser._id,
        owners: [],
        createdAt: Date.now(),
      });
      await store.save();

      return res.status(201).json({
        message: "Store added successfully!",
        data: store,
      });
    } else if (loggedInUser.owner) {
      const owner = await Owner.findById(loggedInUser.ownerId);

      if (owner.ownerHistory.length > 0) {
        if (
          owner.ownerHistory[owner.ownerHistory.length - 1].to == null ||
          owner.ownerHistory[owner.ownerHistory.length - 1].to == undefined
        ) {
          await awsDelete.delete(image);

          const error = new Error("You're already an owner of store.");
          error.statusCode = 400;
          throw error;
        }
      }

      const name = JSON.parse(req.body.name);
      const address = JSON.parse(req.body.address);
      const detailedAddress = JSON.parse(req.body.detailedAddress);

      const existedStore = await Store.findOne({ name: name });
      if (existedStore) {
        await awsDelete.delete(image);

        const error = new Error("Store with this name is already exists");
        error.statusCode = 400;
        throw error;
      }

      const store = new Store({
        name: name,
        address: address,
        detailedAddress: detailedAddress,
        image: image,
        creator: loggedInUser._id,
        owners: [owner._id],
        createdAt: Date.now(),
      });
      await store.save();

      owner.ownerHistory.push({
        from: Date.now(),
        store: store._id,
      });
      owner.store = store;
      await owner.save();

      return res.status(201).json({
        message: "Store added successfully!",
        data: store,
      });
    } else {
      await awsDelete.delete(image);

      const error = new Error("Not authorized as you're not an owner!");
      error.statusCode = 403;
      throw error;
    }
  } catch (err) {
    await awsDelete.delete(image);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;

    if (loggedInUser.admin) {
      const storeId = req.params.storeId;
      const store = await Store.findById(storeId);

      if (!store) {
        if (req.file) {
          await awsDelete.delete(req.file.location);
        }

        const error = new Error("Could not find store.");
        error.statusCode = 404;
        throw error;
      }
      let image;
      if (req.file) {
        image = req.file.location;
      } else {
        image = store.image;
      }
      const name = JSON.parse(req.body.name);
      // const address = JSON.parse(req.body.address);

      const oldStore = await Store.findOne({ name: name });
      if (oldStore && !oldStore._id.equals(storeId)) {
        if (req.file) {
          await awsDelete.delete(req.file.location);
        }

        const error = new Error("Store with this name is already exist");
        error.statusCode = 400;
        throw error;
      }
      store.name = name;
      //   store.address = address;
      store.image = image;

      await store.save();

      return res.status(201).json({
        message: "Store updated successfully!",
        data: store,
      });
    }
    if (loggedInUser.owner) {
      const storeId = req.params.storeId;
      const store = await Store.findById(storeId);

      if (!store) {
        if (req.file) {
          await awsDelete.delete(req.file.location);
        }
        const error = new Error("Could not find store.");
        error.statusCode = 404;
        throw error;
      }
      let image;
      if (req.file) {
        image = req.file.location;
      } else {
        image = store.image;
      }
      if (store.owners.includes(loggedInUser.ownerId)) {
        const name = JSON.parse(req.body.name);
        // const address = JSON.parse(req.body.address);

        const oldStore = await Store.findOne({ name: name });
        if (oldStore && !oldStore._id.equals(storeId)) {
          if (req.file) {
            await awsDelete.delete(req.file.location);
          }
          const error = new Error("Store with this name is already exist");
          error.statusCode = 400;
          throw error;
        }

        store.name = name;
        // store.address = address;
        store.image = image;

        await store.save();

        return res.status(201).json({
          message: "Store updated successfully!",
          data: store,
        });
      } else {
        if (req.file) {
          await awsDelete.delete(req.file.location);
        }
        const error = new Error(
          "Not authorized as you're not an owner of this store!"
        );
        error.statusCode = 403;
        throw error;
      }
    } else {
      if (req.file) {
        await awsDelete.delete(req.file.location);
      }
      const error = new Error("Not authorized as you're not an owner!");
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

exports.deleteOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    const storeId = req.params.storeId;
    if (loggedInUser.admin) {
      const store = await Store.findById(storeId);
      if (!store) {
        const error = new Error("Could not find store.");
        error.statusCode = 404;
        throw error;
      }

      for (let index = 0; index < store.owners.length; index++) {
        let owner = await Owner.findById(store.owners[index]);
        if (owner) {
          owner.ownerHistory[owner.ownerHistory.length - 1].to = Date.now();
          owner.store = undefined;

          let user = await User.findById(owner.user);
          if (user) {
            user.owner = undefined;
            user.ownerId = undefined;
          }

          await user.save();

          await owner.save();
        }
      }
      for (let index = 0; index < store.products.length; index++) {
        await Product.findByIdAndDelete(store.products[index]);
      }

      await awsDelete.delete(store.image);
      await Store.findByIdAndDelete(storeId);
      return res.status(200).json({ message: "Store deleted!" });
    } else if (loggedInUser.owner) {
      const storeId = req.params.storeId;
      const store = await Store.findById(storeId);
      if (!store) {
        const error = new Error("Could not find store.");
        error.statusCode = 404;
        throw error;
      }

      if (store.owners.includes(loggedInUser.ownerId)) {
        store.active = false;
        await store.save();

        return res.status(201).json({
          message: "Store inactivated successfully!",
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
    const storeId = req.params.storeId;
    if (loggedInUser.admin) {
      const store = await Store.findById(storeId);
      if (!store) {
        const error = new Error("Could not find store.");
        error.statusCode = 404;
        throw error;
      }

      if (store.active) {
        const error = new Error("store is already activated.");
        error.statusCode = 404;
        throw error;
      }

      store.active = true;
      store.activatedBy = loggedInUser._id;
      await store.save();

      return res.status(200).json({ message: "Store activated!" });
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
    const storeId = req.params.storeId;
    if (loggedInUser.admin) {
      const store = await Store.findById(storeId);
      if (!store) {
        const error = new Error("Could not find store.");
        error.statusCode = 404;
        throw error;
      }

      if (!store.active) {
        const error = new Error("store is already deactivated.");
        error.statusCode = 404;
        throw error;
      }

      store.active = false;
      store.deactivatedBy = loggedInUser._id;
      await store.save();

      return res.status(200).json({ message: "Store deactivated!" });
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

exports.lockOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    const storeId = req.params.storeId;
    if (loggedInUser.admin) {
      const store = await Store.findById(storeId);
      if (!store) {
        const error = new Error("Could not find store.");
        error.statusCode = 404;
        throw error;
      }

      if (store.locked) {
        const error = new Error("store is already locked.");
        error.statusCode = 404;
        throw error;
      }

      store.locked = true;
      store.lockedBy = loggedInUser._id;
      await store.save();

      return res.status(200).json({ message: "Store locked!" });
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

exports.unlockOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    const storeId = req.params.storeId;
    if (loggedInUser.admin) {
      const store = await Store.findById(storeId);
      if (!store) {
        const error = new Error("Could not find store.");
        error.statusCode = 404;
        throw error;
      }

      if (!store.locked) {
        const error = new Error("store is already unlocked.");
        error.statusCode = 404;
        throw error;
      }

      store.locked = false;
      store.unlockedBy = loggedInUser._id;
      await store.save();

      return res.status(200).json({ message: "Store unlocked!" });
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

exports.collect = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    const storeId = req.params.storeId;
    if (loggedInUser.admin) {
      const store = await Store.findById(storeId);
      if (!store) {
        const error = new Error("Could not find store.");
        error.statusCode = 404;
        throw error;
      }

      if (!store.totalGainCollected) {
        store.totalGainCollected = 0;
      }
      if (store.gainToApp === 0) {
        const error = new Error("No profit to collect.");
        error.statusCode = 400;
        throw error;
      }

      store.totalGainCollected += store.gainToApp;
      store.gainToApp = 0;
      store.lastCollectBy = loggedInUser._id;
      store.lastCollectAt = Date.now();
      await store.save();

      return res.status(200).json({ message: "Profit collected!" });
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

// exports.getAll = async (req, res, next) => {
//   try {
//     const stores = await Store.find({
//       branches: { $not: { $size: 0 } },
//     }).populate({
//       path: "owners",
//       model: "Owner",
//     });

//     return res.status(200).json({
//       message: "Success",
//       data: stores,
//     });
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

exports.addDiscount = async (req, res, next) => {
  try {
    const loggedInUser = req.user;

    const storeId = req.params.storeId;
    const store = await Store.findById(storeId);

    if (!store) {
      const error = new Error("Could not find store.");
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
        discountOn: "store",
        store: storeId,
        discountType: discountType,
        discountValue: discountValue,
        discountPercentage: discountPercentage,
        creator: loggedInUser._id,
        createdAt: Date.now(),
        validTill: validTill,
      });
      await discount.save();

      store.discountType = discountType;
      store.discountValue = discountValue;
      store.discountPercentage = discountPercentage;
      store.discount = discount._id;
      if (store.products && store.products.length > 0) {
        for (
          let productIndex = 0;
          productIndex < store.products.length;
          productIndex++
        ) {
          const productId = store.products[productIndex];
          let product = await Product.findById(productId);
          if (product) {
            product.discountType = discountType;
            product.discountValue = discountValue;
            product.discountPercentage = discountPercentage;
            product.discount = discount._id;

            await product.save();
          }
        }
      }

      await store.save();

      return res.status(201).json({
        message: "Store discount added successfully!",
        data: store,
      });
    } else if (loggedInUser.owner) {
      const owner = await Owner.findById(loggedInUser.ownerId);

      if (store.owners.includes(loggedInUser.ownerId)) {
        const discount = new Discount({
          discountOn: "store",
          store: storeId,
          discountType: discountType,
          discountValue: discountValue,
          discountPercentage: discountPercentage,
          creator: loggedInUser._id,
          createdAt: Date.now(),
          validTill: validTill,
        });
        await discount.save();

        store.discountType = discountType;
        store.discountValue = discountValue;
        store.discountPercentage = discountPercentage;
        store.discount = discount._id;
        if (store.products && store.products.length > 0) {
          for (
            let productIndex = 0;
            productIndex < store.products.length;
            productIndex++
          ) {
            const productId = store.products[productIndex];
            let product = await Product.findById(productId);
            if (product) {
              product.discountType = discountType;
              product.discountValue = discountValue;
              product.discountPercentage = discountPercentage;
              product.discount = discount._id;

              await product.save();
            }
          }
        }
        await store.save();

        return res.status(201).json({
          message: "Store discount added successfully!",
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

exports.deleteDiscount = async (req, res, next) => {
  try {
    const loggedInUser = req.user;

    const storeId = req.params.storeId;
    const store = await Store.findById(storeId);

    if (!store) {
      const error = new Error("Could not find store.");
      error.statusCode = 404;
      throw error;
    }
    const discountId = store.discount;
    const discount = await Discount.findById(discountId);

    if (!discount) {
      const error = new Error("Could not find discount.");
      error.statusCode = 404;
      throw error;
    }

    if (loggedInUser.admin) {
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

      await Discount.findByIdAndDelete(discountId);
      return res.status(201).json({
        message: "Store discount deleted successfully!",
        data: store,
      });
    } else if (loggedInUser.owner) {
      if (store.owners.includes(loggedInUser.ownerId)) {
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

exports.addProfit = async (req, res, next) => {
  try {
    const loggedInUser = req.user;

    const storeId = req.params.storeId;
    const store = await Store.findById(storeId);

    if (!store) {
      const error = new Error("Could not find store.");
      error.statusCode = 404;
      throw error;
    }

    const profitType = req.body.profitType;
    const profitValue = req.body.profitValue;
    const profitPercentage = req.body.profitPercentage;
    const validTill = req.body.validTill;

    if (profitType === "" || (profitValue === 0 && profitPercentage === 0)) {
      const error = new Error("No profit to add.");
      error.statusCode = 400;
      throw error;
    }

    if (loggedInUser.admin) {
      const profit = new Profit({
        profitOn: "store",
        store: storeId,
        profitType: profitType,
        profitValue: profitValue,
        profitPercentage: profitPercentage,
        creator: loggedInUser._id,
        createdAt: Date.now(),
        validTill: validTill,
      });
      await profit.save();

      store.profitType = profitType;
      store.profitValue = profitValue;
      store.profitPercentage = profitPercentage;
      store.profit = profit._id;
      if (store.products && store.products.length > 0) {
        for (
          let productIndex = 0;
          productIndex < store.products.length;
          productIndex++
        ) {
          const productId = store.products[productIndex];
          let product = await Product.findById(productId);
          if (product) {
            product.profitType = profitType;
            product.profitValue = profitValue;
            product.profitPercentage = profitPercentage;
            product.profit = profit._id;

            await product.save();
          }
        }
      }

      await store.save();

      return res.status(201).json({
        message: "Store profit added successfully!",
        data: store,
      });
    } else if (loggedInUser.owner) {
      const owner = await Owner.findById(loggedInUser.ownerId);

      if (store.owners.includes(loggedInUser.ownerId)) {
        const profit = new Profit({
          profitOn: "store",
          store: storeId,
          profitType: profitType,
          profitValue: profitValue,
          profitPercentage: profitPercentage,
          creator: loggedInUser._id,
          createdAt: Date.now(),
          validTill: validTill,
        });
        await profit.save();

        store.profitType = profitType;
        store.profitValue = profitValue;
        store.profitPercentage = profitPercentage;
        store.profit = profit._id;
        if (store.products && store.products.length > 0) {
          for (
            let productIndex = 0;
            productIndex < store.products.length;
            productIndex++
          ) {
            const productId = store.products[productIndex];
            let product = await Product.findById(productId);
            if (product) {
              product.profitType = profitType;
              product.profitValue = profitValue;
              product.profitPercentage = profitPercentage;
              product.profit = profit._id;

              await product.save();
            }
          }
        }
        await store.save();

        return res.status(201).json({
          message: "Store profit added successfully!",
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

exports.deleteProfit = async (req, res, next) => {
  try {
    const loggedInUser = req.user;

    const storeId = req.params.storeId;
    const store = await Store.findById(storeId);

    if (!store) {
      const error = new Error("Could not find store.");
      error.statusCode = 404;
      throw error;
    }
    const profitId = store.profit;
    const profit = await Discount.findById(profitId);

    if (!profit) {
      const error = new Error("Could not find profit.");
      error.statusCode = 404;
      throw error;
    }

    if (loggedInUser.admin) {
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
    } else if (loggedInUser.owner) {
      if (store.owners.includes(loggedInUser.ownerId)) {
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

//*//**//**//**//***//**/ */ */ */ */ */
// Mobile api

exports.appAddOne = async (req, res, next) => {
  let image;
  if (req.file) {
    image = req.file.location;
  }
  try {
    const loggedInUser = req.user;

    if (loggedInUser.admin) {
      const name = req.body.name;
      const address = req.body.address;
      const detailedAddress = req.body.detailedAddress;

      const existedStore = await Store.findOne({ name: name });
      if (existedStore) {
        await awsDelete.delete(image);

        const error = new Error("Store with this name is already exists");
        error.statusCode = 400;
        throw error;
      }

      const store = new Store({
        name: name,
        address: address,
        detailedAddress: detailedAddress,
        image: image,
        creator: loggedInUser._id,
        owners: [],
        createdAt: Date.now(),
      });
      await store.save();

      return res.status(201).json({
        message: "Store added successfully!",
        data: store,
      });
    } else if (loggedInUser.owner) {
      const owner = await Owner.findById(loggedInUser.ownerId);

      if (owner.ownerHistory.length > 0) {
        if (
          owner.ownerHistory[owner.ownerHistory.length - 1].to == null ||
          owner.ownerHistory[owner.ownerHistory.length - 1].to == undefined
        ) {
          await awsDelete.delete(image);

          const error = new Error("You're already an owner of store.");
          error.statusCode = 400;
          throw error;
        }
      }

      const name = req.body.name;
      const address = req.body.address;
      const detailedAddress = req.body.detailedAddress;

      const existedStore = await Store.findOne({ name: name });
      if (existedStore) {
        await awsDelete.delete(image);

        const error = new Error("Store with this name is already exists");
        error.statusCode = 400;
        throw error;
      }

      const store = new Store({
        name: name,
        address: address,
        detailedAddress: detailedAddress,
        image: image,
        creator: loggedInUser._id,
        owners: [owner._id],
        createdAt: Date.now(),
      });
      await store.save();

      owner.ownerHistory.push({
        from: Date.now(),
        store: store._id,
      });
      owner.store = store;
      await owner.save();

      return res.status(201).json({
        message: "Store added successfully!",
        data: store,
      });
    } else {
      await awsDelete.delete(image);

      const error = new Error("Not authorized as you're not an owner!");
      error.statusCode = 403;
      throw error;
    }
  } catch (err) {
    await awsDelete.delete(image);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
