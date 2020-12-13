const Bike = require("../models/bike");
const Store = require("../models/store");
const Discount = require("../models/discount");
const Profit = require("../models/profit");
const Order = require("../models/order");
const User = require("../models/stackholders/user");
const Owner = require("../models/stackholders/owner");

const awsDelete = require("../startup/aws-s3-delete");

exports.getAll = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      let bikes = await Bike.find()

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
        data: bikes,
      });
    } else if (loggedInUser.owner) {
      if (loggedInUser.store) {
        let bikes = await Bike.find({ store: loggedInUser.store })

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
          data: bikes,
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
  const bikeId = req.params.bikeId;
  try {
    const bike = await Bike.findById(bikeId)

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
    if (!bike) {
      const error = new Error("Could not find bike.");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({
      message: "fetched successfully",
      data: bike,
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

    if (req.files.length === 0) {
      const error = new Error("Add at least one image.");
      error.statusCode = 401;
      throw error;
    }

    const name = JSON.parse(req.body.name);
    const description = JSON.parse(req.body.description);
    const price = JSON.parse(req.body.price);
    const color = JSON.parse(req.body.color);
    const year = JSON.parse(req.body.year);
    const conditionId = JSON.parse(req.body.condition)._id;
    const conditionEn = JSON.parse(req.body.condition).name.en;
    const conditionAr = JSON.parse(req.body.condition).name.ar;
    const modelId = JSON.parse(req.body.model)._id;
    const modelEn = JSON.parse(req.body.model).name.en;
    const modelAr = JSON.parse(req.body.model).name.ar;
    const transmissionTypeId = JSON.parse(req.body.transmissionType)._id;
    const transmissionTypeEn = JSON.parse(req.body.transmissionType).name.en;
    const transmissionTypeAr = JSON.parse(req.body.transmissionType).name.ar;
    const distanceId = JSON.parse(req.body.distance)._id;
    const distanceEn = JSON.parse(req.body.distance).name.en;
    const distanceAr = JSON.parse(req.body.distance).name.ar;
    const paymentOptionId = JSON.parse(req.body.paymentOption)._id;
    const paymentOptionEn = JSON.parse(req.body.paymentOption).name.en;
    const paymentOptionAr = JSON.parse(req.body.paymentOption).name.ar;
    const capacityId = JSON.parse(req.body.capacity)._id;
    const capacityEn = JSON.parse(req.body.capacity).name.en;
    const capacityAr = JSON.parse(req.body.capacity).name.ar;

    let photos = [];
    for (let index = 0; index < req.files.length; index++) {
      photos.push(req.files[index].location);
    }

    const bike = new Bike({
      photos: photos,
      creator: loggedInUser._id,
      createdAt: Date.now(),
      name: name,
      description: description,
      price: price,
      color: color,
      year: year,
      condition: {
        _id: conditionId,
        en: conditionEn,
        ar: conditionAr,
      },
      model: {
        _id: modelId,
        en: modelEn,
        ar: modelAr,
      },
      transmissionType: {
        _id: transmissionTypeId,
        en: transmissionTypeEn,
        ar: transmissionTypeAr,
      },
      distance: {
        _id: distanceId,
        en: distanceEn,
        ar: distanceAr,
      },
      paymentOption: {
        _id: paymentOptionId,
        en: paymentOptionEn,
        ar: paymentOptionAr,
      },
      capacity: {
        _id: capacityId,
        en: capacityEn,
        ar: capacityAr,
      },
    });

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
        store: store,
      });

      if (discount) {
        bike.discountType = discount.discountType;
        bike.discountValue = discount.discountValue;
        bike.discountPercentage = discount.discountPercentage;
        bike.discount = discount._id;
      }

      const profit = await Profit.findOne({
        store: store,
      });

      if (profit) {
        bike.profitType = profit.profitType;
        bike.profitValue = profit.profitValue;
        bike.profitPercentage = profit.profitPercentage;
        bike.profit = profit._id;
      }

      bike.store = store._id;
      if (!store.bikes) {
        store.bikes = [];
      }
      store.bikes.push(bike._id);

      await store.save();
    } else {
      if (loggedInUser.bikes) {
        loggedInUser.bikes.push(bike._id);
      } else {
        loggedInUser.bikes = [bike._id];
      }
      await loggedInUser.save();
    }

    await bike.save();

    return res.status(201).json({
      message: "Bike added successfully!",
      data: bike,
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

    const bikeId = req.params.bikeId;

    const bike = await Bike.findById(bikeId);

    if (!bike) {
      if (req.files && req.files > 0) {
        // delete photos from aws
        for (let index = 0; index < req.files.length; index++) {
          await awsDelete.delete(req.files[index].location);
        }
      }

      const error = new Error("Could not find bike.");
      error.statusCode = 404;
      throw error;
    }

    const name = JSON.parse(req.body.name);
    const description = JSON.parse(req.body.description);
    const price = JSON.parse(req.body.price);
    const color = JSON.parse(req.body.color);
    const year = JSON.parse(req.body.year);
    const conditionId = JSON.parse(req.body.condition)._id;
    const conditionEn = JSON.parse(req.body.condition).name.en;
    const conditionAr = JSON.parse(req.body.condition).name.ar;
    const modelId = JSON.parse(req.body.model)._id;
    const modelEn = JSON.parse(req.body.model).name.en;
    const modelAr = JSON.parse(req.body.model).name.ar;
    const transmissionTypeId = JSON.parse(req.body.transmissionType)._id;
    const transmissionTypeEn = JSON.parse(req.body.transmissionType).name.en;
    const transmissionTypeAr = JSON.parse(req.body.transmissionType).name.ar;
    const distanceId = JSON.parse(req.body.distance)._id;
    const distanceEn = JSON.parse(req.body.distance).name.en;
    const distanceAr = JSON.parse(req.body.distance).name.ar;
    const paymentOptionId = JSON.parse(req.body.paymentOption)._id;
    const paymentOptionEn = JSON.parse(req.body.paymentOption).name.en;
    const paymentOptionAr = JSON.parse(req.body.paymentOption).name.ar;
    const capacityId = JSON.parse(req.body.capacity)._id;
    const capacityEn = JSON.parse(req.body.capacity).name.en;
    const capacityAr = JSON.parse(req.body.capacity).name.ar;

    const originalPhotos = JSON.parse(req.body.originalPhotos);
    // bike.photos = photos.concat(originalPhotos);

    bike.name = name;
    bike.description = description;
    bike.price = price;
    bike.color = color;
    bike.year = year;
    bike.conditionId = conditionId;
    bike.condition.en = conditionEn;
    bike.condition.ar = conditionAr;
    bike.modelId = modelId;
    bike.model.en = modelEn;
    bike.model.ar = modelAr;
    bike.transmissionTypeId = transmissionTypeId;
    bike.transmissionType.en = transmissionTypeEn;
    bike.transmissionType.ar = transmissionTypeAr;
    bike.distanceId = distanceId;
    bike.distance.en = distanceEn;
    bike.distance.ar = distanceAr;
    bike.paymentOptionId = paymentOptionId;
    bike.paymentOption.en = paymentOptionEn;
    bike.paymentOption.ar = paymentOptionAr;
    bike.capacityId = capacityId;
    bike.capacity.en = capacityEn;
    bike.capacity.ar = capacityAr;
    bike.updatedAt = Date.now();

    if (bike.store) {
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

        if (!store.equals(bike.store)) {
          if (req.files && req.files > 0) {
            // delete photos from aws
            for (let index = 0; index < req.files.length; index++) {
              await awsDelete.delete(req.files[index].location);
            }
          }

          const error = new Error("You're not an owner of store of this bike.");
          error.statusCode = 404;
          throw error;
        }
      } else {
        const error = new Error("you're not an owner.");
        error.statusCode = 404;
        throw error;
      }
    }

    if (!bike.creator.equals(loggedInUser._id)) {
      // delete photos from aws
      for (let index = 0; index < req.files.length; index++) {
        await awsDelete.delete(req.files[index].location);
      }

      const error = new Error("you're not the creator of this bike.");
      error.statusCode = 404;
      throw error;
    }

    await bike.save();

    return res.status(200).json({ message: "Bike updated!", data: bike });
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
    const bikeId = req.params.bikeId;
    if (loggedInUser.admin) {
      const bike = await Bike.findById(bikeId);
      if (!bike) {
        const error = new Error("Could not find bike.");
        error.statusCode = 404;
        throw error;
      }

      if (bike.active) {
        const error = new Error("bike is already activated.");
        error.statusCode = 401;
        throw error;
      }

      bike.active = true;
      bike.activatedBy = loggedInUser._id;
      await bike.save();

      return res.status(200).json({ message: "Bike activated!" });
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
    const bikeId = req.params.bikeId;
    if (loggedInUser.admin) {
      const bike = await Bike.findById(bikeId);
      if (!bike) {
        const error = new Error("Could not find bike.");
        error.statusCode = 404;
        throw error;
      }

      if (!bike.active) {
        const error = new Error("bike is already deactivated.");
        error.statusCode = 401;
        throw error;
      }

      bike.active = false;
      bike.deactivatedBy = loggedInUser._id;
      await bike.save();

      return res.status(200).json({ message: "Bike deactivated!" });
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
    const bikeId = req.params.bikeId;
    if (loggedInUser.admin) {
      const bike = await Bike.findById(bikeId);
      if (!bike) {
        const error = new Error("Could not find bike.");
        error.statusCode = 404;
        throw error;
      }

      if (bike.sold) {
        const error = new Error("bike is already sold.");
        error.statusCode = 404;
        throw error;
      }

      bike.sold = true;
      await bike.save();

      return res.status(200).json({ message: "Bike sold!" });
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
    const bikeId = req.params.bikeId;
    if (loggedInUser.admin) {
      const bike = await Bike.findById(bikeId);
      if (!bike) {
        const error = new Error("Could not find bike.");
        error.statusCode = 404;
        throw error;
      }

      if (!bike.sold) {
        const error = new Error("bike is already available.");
        error.statusCode = 404;
        throw error;
      }

      bike.sold = false;
      bike.deactivatedBy = loggedInUser._id;
      await bike.save();

      return res.status(200).json({ message: "Bike available!" });
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

// delete the bike should delete it from any unshipped order
exports.deleteOne = async (req, res, next) => {
  const loggedInUser = req.user;
  const bikeId = req.params.bikeId;
  try {
    const bike = await Bike.findById(bikeId);
    if (!bike) {
      const error = new Error("Could not find bike.");
      error.statusCode = 404;
      throw error;
    }

    if (!bike.creator.equals(loggedInUser._id) || loggedInUser.admin) {
      const creator = await User.findById(bike.creator);
      if (creator && creator.bikes) {
        if (creator.bikes.includes(bikeId)) {
          creator.bikes.pull(bikeId);
        }
      }

      if (bike.store) {
        const store = await Store.findById(bike.store);
        if (!store) {
          const error = new Error("Could not find contained store.");
          error.statusCode = 404;
          throw error;
        }

        if (store.bikes.includes(bikeId)) {
          store.bikes.pull(bikeId);
        }
        await store.save();
      }
      // delete photos from aws
      for (let index = 0; index < bike.photos.length; index++) {
        await awsDelete.delete(bike.photos[index]);
      }

      if (creator) {
        await creator.save();
      }

      await Bike.findByIdAndDelete(bikeId);
    } else {
      const error = new Error("Not authorized!");
      error.statusCode = 403;
      throw error;
    }

    return res.status(200).json({ message: "bike deleted!" });
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addBikeToStore = async (req, res, next) => {
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

      const bikeId = req.params.bikeId;
      const bike = await Bike.findById(bikeId);

      if (!bike) {
        const error = new Error("Could not find bike.");
        error.statusCode = 404;
        throw error;
      }

      if (bike.store) {
        const error = new Error("This bike is already in store.");
        error.statusCode = 400;
        throw error;
      }

      const discount = await Discount.findOne({
        store: store,
      });

      if (discount) {
        bike.discountType = discount.discountType;
        bike.discountValue = discount.discountValue;
        bike.discountPercentage = discount.discountPercentage;
        bike.discount = discount._id;
      } else {
        bike.discountType = store.discountType;
        bike.discountValue = store.discountValue;
        bike.discountPercentage = store.discountPercentage;
        bike.discount = store._id;
      }

      const profit = await Profit.findOne({
        store: store,
      });

      if (profit) {
        bike.profitType = profit.profitType;
        bike.profitValue = profit.profitValue;
        bike.profitPercentage = profit.profitPercentage;
        bike.profit = profit._id;
      } else {
        bike.profitType = store.profitType;
        bike.profitValue = store.profitValue;
        bike.profitPercentage = store.profitPercentage;
        bike.profit = store._id;
      }

      bike.store = storeId;

      await bike.save();
      store.bikes.push(bike._id);
      await store.save();

      return res.status(201).json({
        message: "Bike added successfully!",
        data: bike,
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

    const bikeId = req.params.bikeId;
    const bike = await Bike.findById(bikeId);

    if (!bike) {
      const error = new Error("Could not find bike.");
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
        discountOn: "bike",
        bike: bikeId,
        discountType: discountType,
        discountValue: discountValue,
        discountPercentage: discountPercentage,
        creator: loggedInUser._id,
        createdAt: Date.now(),
        validTill: validTill,
      });
      await discount.save();

      bike.discountType = discountType;
      bike.discountValue = discountValue;
      bike.discountPercentage = discountPercentage;
      bike.discount = discount._id;

      await bike.save();

      return res.status(201).json({
        message: "Bike discount added successfully!",
        data: bike,
      });
    } else {
      if (bike.store) {
        const store = await Store.findById(bike.store);

        if (loggedInUser.owner) {
          if (store.owners.includes(loggedInUser.ownerId)) {
            const discount = new Discount({
              discountOn: "bike",
              bike: bikeId,
              discountType: discountType,
              discountValue: discountValue,
              discountPercentage: discountPercentage,
              creator: loggedInUser._id,
              createdAt: Date.now(),
              validTill: validTill,
            });
            await discount.save();

            bike.discountType = discountType;
            bike.discountValue = discountValue;
            bike.discountPercentage = discountPercentage;
            bike.discount = discount._id;

            await bike.save();

            return res.status(201).json({
              message: "bike discount added successfully!",
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
        if (bike.creator.equals(loggedInUser._id)) {
          const discount = new Discount({
            discountOn: "bike",
            bike: bikeId,
            discountType: discountType,
            discountValue: discountValue,
            discountPercentage: discountPercentage,
            creator: loggedInUser._id,
            createdAt: Date.now(),
            validTill: validTill,
          });
          await discount.save();

          bike.discountType = discountType;
          bike.discountValue = discountValue;
          bike.discountPercentage = discountPercentage;
          bike.discount = discount._id;

          await bike.save();

          return res.status(201).json({
            message: "Bike discount added successfully!",
            data: bike,
          });
        } else {
          const error = new Error(
            "Not authorized as you're not the creator of this bike!"
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

    const bikeId = req.params.bikeId;
    const bike = await Bike.findById(bikeId);

    if (!bike) {
      const error = new Error("Could not find bike.");
      error.statusCode = 404;
      throw error;
    }
    const discountId = bike.discount;
    const discount = await Discount.findById(discountId);

    if (!discount) {
      const error = new Error("Could not find discount.");
      error.statusCode = 404;
      throw error;
    }

    if (loggedInUser.admin) {
      if (bike.discount && bike.discount.equals(discountId)) {
        bike.discountType = "";
        bike.discountValue = 0;
        bike.discountPercentage = 0;
        bike.discount = undefined;
      }

      await bike.save();

      await Discount.findByIdAndDelete(discountId);
      return res.status(201).json({
        message: "Bike discount deleted successfully!",
        data: bike,
      });
    }
    if (bike.store) {
      const store = await Store.findById(bike.store);

      if (loggedInUser.owner) {
        if (store.owners.includes(loggedInUser.ownerId)) {
          if (bike.discount && bike.discount.equals(discountId)) {
            bike.discountType = "";
            bike.discountValue = 0;
            bike.discountPercentage = 0;
            bike.discount = undefined;
          }

          await bike.save();

          await Discount.findByIdAndDelete(discountId);
          return res.status(201).json({
            message: "Bike discount deleted successfully!",
            data: bike,
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
      if (bike.creator.equals(loggedInUser._id)) {
        if (bike.discount && bike.discount.equals(discountId)) {
          bike.discountType = "";
          bike.discountValue = 0;
          bike.discountPercentage = 0;
          bike.discount = undefined;
        }

        await bike.save();

        await Discount.findByIdAndDelete(discountId);
        return res.status(201).json({
          message: "Bike discount deleted successfully!",
          data: bike,
        });
      } else {
        const error = new Error(
          "Not authorized as you're not the creator of this bike!"
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

    const bikeId = req.params.bikeId;
    const bike = await Bike.findById(bikeId);

    if (!bike) {
      const error = new Error("Could not find bike.");
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
        profitOn: "bike",
        bike: bikeId,
        profitType: profitType,
        profitValue: profitValue,
        profitPercentage: profitPercentage,
        creator: loggedInUser._id,
        createdAt: Date.now(),
        validTill: validTill,
      });
      await profit.save();

      bike.profitType = profitType;
      bike.profitValue = profitValue;
      bike.profitPercentage = profitPercentage;
      bike.profit = profit._id;

      await bike.save();

      return res.status(201).json({
        message: "Bike profit added successfully!",
        data: bike,
      });
    } else {
      if (bike.store) {
        const store = await Store.findById(bike.store);

        if (loggedInUser.owner) {
          if (store.owners.includes(loggedInUser.ownerId)) {
            const profit = new Profit({
              profitOn: "bike",
              bike: bikeId,
              profitType: profitType,
              profitValue: profitValue,
              profitPercentage: profitPercentage,
              creator: loggedInUser._id,
              createdAt: Date.now(),
              validTill: validTill,
            });
            await profit.save();

            bike.profitType = profitType;
            bike.profitValue = profitValue;
            bike.profitPercentage = profitPercentage;
            bike.profit = profit._id;

            await bike.save();

            return res.status(201).json({
              message: "bike profit added successfully!",
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
        if (bike.creator.equals(loggedInUser._id)) {
          const profit = new Profit({
            profitOn: "bike",
            bike: bikeId,
            profitType: profitType,
            profitValue: profitValue,
            profitPercentage: profitPercentage,
            creator: loggedInUser._id,
            createdAt: Date.now(),
            validTill: validTill,
          });
          await profit.save();

          bike.profitType = profitType;
          bike.profitValue = profitValue;
          bike.profitPercentage = profitPercentage;
          bike.profit = profit._id;

          await bike.save();

          return res.status(201).json({
            message: "Bike profit added successfully!",
            data: bike,
          });
        } else {
          const error = new Error(
            "Not authorized as you're not the creator of this bike!"
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

    const bikeId = req.params.bikeId;
    const bike = await Bike.findById(bikeId);

    if (!bike) {
      const error = new Error("Could not find bike.");
      error.statusCode = 404;
      throw error;
    }
    const profitId = bike.profit;
    const profit = await Profit.findById(profitId);

    if (!profit) {
      const error = new Error("Could not find profit.");
      error.statusCode = 404;
      throw error;
    }

    if (loggedInUser.admin) {
      if (bike.profit && bike.profit.equals(profitId)) {
        bike.profitType = "";
        bike.profitValue = 0;
        bike.profitPercentage = 0;
        bike.profit = undefined;
      }

      await bike.save();

      await Profit.findByIdAndDelete(profitId);
      return res.status(201).json({
        message: "Bike profit deleted successfully!",
        data: bike,
      });
    }
    if (bike.store) {
      const store = await Store.findById(bike.store);

      if (loggedInUser.owner) {
        if (store.owners.includes(loggedInUser.ownerId)) {
          if (bike.profit && bike.profit.equals(profitId)) {
            bike.profitType = "";
            bike.profitValue = 0;
            bike.profitPercentage = 0;
            bike.profit = undefined;
          }

          await bike.save();

          await Profit.findByIdAndDelete(profitId);
          return res.status(201).json({
            message: "Bike profit deleted successfully!",
            data: bike,
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
      if (bike.creator.equals(loggedInUser._id)) {
        if (bike.profit && bike.profit.equals(profitId)) {
          bike.profitType = "";
          bike.profitValue = 0;
          bike.profitPercentage = 0;
          bike.profit = undefined;
        }

        await bike.save();

        await Profit.findByIdAndDelete(profitId);
        return res.status(201).json({
          message: "Bike profit deleted successfully!",
          data: bike,
        });
      } else {
        const error = new Error(
          "Not authorized as you're not the creator of this bike!"
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
      let bikes = await Bike.find()
        .populate({
          path: "properties",
          model: "bikeProperty",
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
        data: bikes,
      });
    } else if (loggedInUser.owner) {
      if (loggedInUser.store) {
        let bikes = await Bike.find({ store: loggedInUser.store })
          .populate({
            path: "properties",
            model: "bikeProperty",
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
          data: bikes,
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

exports.getActivatedBikes = async (req, res, next) => {
  try {
    let bikes = await Bike.find({ active: true })
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
      data: bikes,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getActivatedBikesWithDiscount = async (req, res, next) => {
  try {
    const discountId = req.params.discountId;
    let bikes = await Bike.find({ active: true, discount: discountId })

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
      data: bikes,
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
    const bikeId = req.params.bikeId;
    const bike = await Bike.findById(bikeId);
    if (!bike) {
      const error = new Error("Could not find bike to review.");
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

    // check if the user already ordered this bike
    let prod = order.bikes.find((e) => e.bike.equals(bikeId));

    if (prod) {
      let previousReview = bike.reviews.find((e) =>
        e.user.equals(loggedInUser._id)
      );

      const content = req.body.content;
      const rate = req.body.rate;

      if (previousReview) {
        if (content != "" || rate != 0) {
          bike.reviews[bike.reviews.indexOf(previousReview)] = {
            user: loggedInUser._id,
            content: content,
            rate: rate,
          };

          await bike.save();
          return res.status(201).json({
            message: "bike review added successfully!",
            data: bike,
          });
        } else {
          const error = new Error("Enter rate or content!");
          error.statusCode = 400;
          throw error;
        }
      } else {
        if (content != "" || rate != 0) {
          bike.reviews.push({
            user: loggedInUser._id,
            content: content,
            rate: rate,
          });

          await bike.save();

          return res.status(201).json({
            message: "bike review added successfully!",
            data: bike,
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
    const price = req.body.price;
    const color = req.body.color;
    const year = req.body.year;
    const conditionId = req.body.condition._id;
    const conditionEn = req.body.condition.name.en;
    const conditionAr = req.body.condition.name.ar;
    const modelId = req.body.model._id;
    const modelEn = req.body.model.name.en;
    const modelAr = req.body.model.name.ar;
    const transmissionTypeId = req.body.transmissionType._id;
    const transmissionTypeEn = req.body.transmissionType.name.en;
    const transmissionTypeAr = req.body.transmissionType.name.ar;
    const distanceId = req.body.distance._id;
    const distanceEn = req.body.distance.name.en;
    const distanceAr = req.body.distance.name.ar;
    const paymentOptionId = req.body.paymentOption._id;
    const paymentOptionEn = req.body.paymentOption.name.en;
    const paymentOptionAr = req.body.paymentOption.name.ar;
    const capacityId = req.body.capacity._id;
    const capacityEn = req.body.capacity.name.en;
    const capacityAr = req.body.capacity.name.ar;

    let photos = [];
    for (let index = 0; index < req.files.length; index++) {
      photos.push(req.files[index].location);
    }

    const bike = new Bike({
      photos: photos,
      creator: loggedInUser._id,
      createdAt: Date.now(),
      name: name,
      description: description,
      price: price,
      color: color,
      year: year,
      condition: {
        _id: conditionId,
        en: conditionEn,
        ar: conditionAr,
      },
      model: {
        _id: modelId,
        en: modelEn,
        ar: modelAr,
      },
      transmissionType: {
        _id: transmissionTypeId,
        en: transmissionTypeEn,
        ar: transmissionTypeAr,
      },
      distance: {
        _id: distanceId,
        en: distanceEn,
        ar: distanceAr,
      },
      paymentOption: {
        _id: paymentOptionId,
        en: paymentOptionEn,
        ar: paymentOptionAr,
      },
      capacity: {
        _id: capacityId,
        en: capacityEn,
        ar: capacityAr,
      },
    });

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
        store: store,
      });

      if (discount) {
        bike.discountType = discount.discountType;
        bike.discountValue = discount.discountValue;
        bike.discountPercentage = discount.discountPercentage;
        bike.discount = discount._id;
      }

      const profit = await Profit.findOne({
        store: store,
      });

      if (profit) {
        bike.profitType = profitType.profitType;
        bike.profitValue = profitValue.profitValue;
        bike.profitPercentage = profitPercentage.profitPercentage;
        bike.profit = profit._id;
      }

      bike.store = store._id;
      if (!store.bikes) {
        store.bikes = [];
      }
      store.bikes.push(bike._id);

      await store.save();
    } else {
      if (loggedInUser.bikes) {
        loggedInUser.bikes.push(bike._id);
      } else {
        loggedInUser.bikes = [bike._id];
      }
      await loggedInUser.save();
    }

    await bike.save();

    return res.status(201).json({
      message: "Bike added successfully!",
      data: bike,
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
