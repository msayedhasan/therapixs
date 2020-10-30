const Owner = require("../../models/stackholders/owner");
const User = require("../../models/stackholders/user");

exports.activateStore = async (req, res, next) => {
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

      if (store.active) {
        const error = new Error("This store is already activated.");
        error.statusCode = 400;
        throw error;
      }

      store.active = true;
      await store.save();

      return res.status(201).json({
        message: "Store activated successfully!",
        data: store,
      });
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

exports.editNumberOfBranches = async (req, res, next) => {
  try {
    const numberOfBranches = req.body.numberOfBranches;

    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      const storeId = req.params.storeId;
      const store = await Store.findById(storeId);

      store.numberOfBranches = numberOfBranches;

      await store.save();

      return res.status(201).json({
        message: "Store updated successfully!",
        data: store,
      });
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
