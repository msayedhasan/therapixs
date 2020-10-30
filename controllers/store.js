const Store = require("../models/store");
const Owner = require("../models/stackholders/owner");

exports.getAll = async (req, res, next) => {
  try {
    const stores = await Store.find().populate({
      path: "owners",
      model: "Owner",
    });

    return res.status(200).json({
      message: "Success",
      data: stores,
    });
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

exports.getOne = async (req, res, next) => {
  const storeId = req.params.storeId;
  try {
    const store = await Store.findById(storeId).populate({
      path: "owners",
      model: "Owner",
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
  try {
    const loggedInUser = req.user;
    if (loggedInUser.owner) {
      const owner = await Owner.findById(loggedInUser.ownerId);

      if (owner.ownerHistory.length > 0) {
        if (
          owner.ownerHistory[owner.ownerHistory.length - 1].to == null ||
          owner.ownerHistory[owner.ownerHistory.length - 1].to == undefined
        ) {
          const error = new Error("You're already an owner of store.");
          error.statusCode = 400;
          throw error;
        }
      }

      const name = JSON.parse(req.body.name);
      const numberOfBranches = JSON.parse(req.body.numberOfBranches);
      const imageFile = req.file;
      if (!imageFile) {
        return res
          .status(422)
          .json({ message: "Attached file is not an image" });
      }
      const image = imageFile.path;

      const existedStore = await Store.findOne({ name: name });
      if (existedStore) {
        const error = new Error("Store with this name is already exists");
        error.statusCode = 400;
        throw error;
      }

      const store = new Store({
        name: name,
        image: image,
        numberOfBranches: numberOfBranches,
        owners: [owner._id],
        createdAt: Date.now(),
      });
      await store.save();

      owner.ownerHistory.push({
        from: Date.now(),
        store: store._id,
      });
      owner.storeId = store._id;
      await owner.save();

      return res.status(201).json({
        message: "Store added successfully!",
        data: store,
      });
    } else if (loggedInUser.admin) {
      const name = JSON.parse(req.body.name);
      const numberOfBranches = parseInt(JSON.parse(req.body.numberOfBranches));
      const imageFile = req.file;
      if (!imageFile) {
        return res
          .status(422)
          .json({ message: "Attached file is not an image" });
      }
      const image = imageFile.path;

      const existedStore = await Store.findOne({ name: name });
      if (existedStore) {
        const error = new Error("Store with this name is already exists");
        error.statusCode = 400;
        throw error;
      }

      const store = new Store({
        name: name,
        image: image,
        numberOfBranches: numberOfBranches,
        owners: [],
        createdAt: Date.now(),
      });
      await store.save();

      return res.status(201).json({
        message: "Store added successfully!",
        data: store,
      });
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

exports.updateOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.owner) {
      const storeId = req.params.storeId;
      const store = await Store.findById(storeId);

      if (!store) {
        const error = new Error("Could not find store.");
        error.statusCode = 404;
        throw error;
      }

      if (store.owners.includes(loggedInUser.ownerId)) {
        const name = req.body.name;
        const imageFile = req.file;

        if (!imageFile) {
          return res
            .status(422)
            .json({ message: "Attached file is not an image" });
        }

        const image = imageFile.path;

        const oldStore = await Store.findOne({ name: name });
        if (oldStore) {
          const error = new Error("Store with this name is already exist");
          error.statusCode = 400;
          throw error;
        }

        store.name = name;
        store.image = image;
        await store.save();

        return res.status(201).json({
          message: "Store updated successfully!",
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

exports.deleteOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.owner) {
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
