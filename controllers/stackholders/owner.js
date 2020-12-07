const Owner = require("../../models/stackholders/owner");
const User = require("../../models/stackholders/user");
const Store = require("../../models/store");

exports.getAll = async (req, res, next) => {
  try {
    const owners = await User.find({
      ownerId: { $exists: true },
    }).populate({
      path: "ownerId",
      model: "Owner",
      populate: {
        path: "store",
        model: "Store",
      },
    });
    return res.status(200).json({
      message: "Success",
      data: owners,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  const ownerId = req.params.ownerId;
  try {
    const owner = await Owner.findById(ownerId);
    if (!owner) {
      const error = new Error("Could not find owner.");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({ message: "Success", data: owner });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addOwner = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      const userId = req.params.userId;
      const user = await User.findById(userId);

      if (!user) {
        const error = new Error("Could not find user.");
        error.statusCode = 404;
        throw error;
      }

      if (user.admin) {
        const error = new Error("This user is an admin.");
        error.statusCode = 400;
        throw error;
      }
      if (user.owner) {
        const error = new Error("This user is already an owner.");
        error.statusCode = 400;
        throw error;
      }

      const oldOwner = await Owner.findOne({ user: userId });
      if (oldOwner) {
        user.owner = true;
        user.ownerId = oldOwner._id;
        await user.save();

        return res.status(201).json({
          message: "Owner updated old owner successfully!",
          data: oldOwner,
        });
      }

      const owner = new Owner({
        user: user._id,
      });

      await owner.save();

      user.owner = true;
      user.ownerId = owner._id;
      await user.save();

      return res.status(201).json({
        message: "Owner added successfully!",
        data: user,
      });
    } else {
      const error = new Error("Not authorized as you're not an Admin!");
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

exports.addOwnerToStore = async (req, res, next) => {
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

      const userId = req.params.userId;
      const user = await User.findById(userId);

      if (!user) {
        const error = new Error("Could not find user.");
        error.statusCode = 404;
        throw error;
      }

      if (user.admin) {
        const error = new Error("This user is an admin.");
        error.statusCode = 400;
        throw error;
      }

      if (!user.owner) {
        const error = new Error("This user isn't an owner.");
        error.statusCode = 400;
        throw error;
      }

      const oldOwner = await Owner.findOne({ user: userId });
      if (oldOwner) {
        user.owner = true;
        user.ownerId = oldOwner._id;
        user.store = storeId;
        await user.save();

        oldOwner.ownerHistory.push({
          from: Date.now(),
          store: storeId,
        });

        oldOwner.store = store;
        await oldOwner.save();

        if (store.owners.includes(oldOwner._id)) {
          const error = new Error("This user is already owner of this store.");
          error.statusCode = 400;
          throw error;
        }
        store.owners.push(oldOwner._id);
        await store.save();

        return res.status(201).json({
          message: "old owner updated successfully!",
          data: oldOwner,
        });
      }

      const owner = new Owner({
        user: userId,
        ownerHistory: [
          {
            from: Date.now(),
            store: storeId,
          },
        ],
        store: store,
      });

      user.owner = true;
      user.ownerId = owner._id;
      user.store = storeId;

      await owner.save();
      await user.save();
      store.owners.push(owner._id);
      await store.save();

      return res.status(201).json({
        message: "Owner added successfully!",
        data: user,
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

exports.lockOwner = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      const ownerId = req.params.ownerId;
      const owner = await Owner.findById(ownerId);

      if (owner.locked) {
        const error = new Error("This owner is already locked.");
        error.statusCode = 400;
        throw error;
      }

      owner.locked = true;

      await owner.save();

      return res.status(201).json({
        message: "Owner added successfully!",
        data: owner,
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

exports.unlockOwner = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      const ownerId = req.params.ownerId;
      const owner = await Owner.findById(ownerId);

      if (!owner.locked) {
        const error = new Error("This owner is already unlocked.");
        error.statusCode = 400;
        throw error;
      }

      owner.locked = false;

      await owner.save();

      return res.status(201).json({
        message: "Owner added successfully!",
        data: owner,
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

exports.deleteOwner = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      const userId = req.params.userId;
      const user = await User.findById(userId);

      if (!user.owner) {
        const error = new Error("This user is not an owner.");
        error.statusCode = 400;
        throw error;
      }

      const owner = await Owner.findById(user.ownerId);
      if (!owner) {
        const error = new Error("couldn't find this owner.");
        error.statusCode = 400;
        throw error;
      }

      if (owner.ownerHistory.length > 0) {
        if (!owner.ownerHistory[owner.ownerHistory.length - 1].to) {
          const store = await Store.findById(
            owner.ownerHistory[owner.ownerHistory.length - 1].store
          );

          if (store.owners.includes(owner._id)) {
            store.owners.pull(owner._id);
          }

          await store.save();

          owner.ownerHistory[owner.ownerHistory.length - 1].to = Date.now();
          owner.store = undefined;
          await owner.save();
        }
      }

      user.owner = undefined;
      user.ownerId = undefined;
      user.store = undefined;

      await user.save();

      return res.status(201).json({
        message: "Ownership deleted successfully!",
        data: user,
      });
    } else {
      const error = new Error("Not authorized as you're not an Admin!");
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
