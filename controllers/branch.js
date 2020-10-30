const Store = require("../models/store");
const Branch = require("../models/branch");
const Owner = require("../models/stackholders/owner");

exports.addBranch = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.owner) {
      const owner = await Owner.findById(loggedInUser.ownerId);

      if (owner.ownerHistory.length > 0) {
        if (
          owner.ownerHistory[owner.ownerHistory.length - 1].to == null ||
          owner.ownerHistory[owner.ownerHistory.length - 1].to == undefined
        ) {
          const store = await Store.findById(
            owner.ownerHistory[owner.ownerHistory.length - 1].store
          );

          if (store.numberOfBranches == store.branches.length) {
            const error = new Error("Your store can't own extra branch!");
            error.statusCode = 400;
            throw error;
          }

          const branch = new Branch({
            store: store._id,
            createdAt: Date.now(),
          });
          await branch.save();

          store.branches.push(branch._id);
          await store.save();

          return res.status(201).json({
            message: "Branch added successfully!",
            data: branch,
          });
        } else {
          const error = new Error("Not authorized as you're not an owner!");
          error.statusCode = 403;
          throw error;
        }
      } else {
        const error = new Error("You don't have store to add branch in!");
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

exports.updateBranch = async (req, res, next) => {
  try {
    const branchId = req.params.branchId;

    const loggedInUser = req.user;
    if (loggedInUser.owner) {
      const owner = await Owner.findById(loggedInUser.ownerId);

      if (owner.ownerHistory.length > 0) {
        if (
          owner.ownerHistory[owner.ownerHistory.length - 1].to == null ||
          owner.ownerHistory[owner.ownerHistory.length - 1].to == undefined
        ) {
          const branch = await Branch.findById(branchId);
          if (!branch) {
            const error = new Error("Could not find branch.");
            error.statusCode = 404;
            throw error;
          }

          if (
            owner.ownerHistory[owner.ownerHistory.length - 1].store ==
            branch.store
          ) {
            const name = req.body.name;
            const imageFile = req.file;
            var image;

            if (imageFile == null || imageFile == undefined) {
              image = store.image;
            } else {
              if (!imageFile) {
                return res
                  .status(422)
                  .json({ message: "Attached file is not an image" });
              }

              image = imageFile.path;
            }

            branch.name = name;
            branch.image = image;

            await branch.save();

            return res.status(201).json({
              message: "Branch updated successfully!",
              data: branch,
            });
          } else {
            const error = new Error(
              "you're not an owner of this branch store!"
            );
            error.statusCode = 400;
            throw error;
          }
        } else {
          const error = new Error("Not authorized as you're not an owner!");
          error.statusCode = 403;
          throw error;
        }
      } else {
        const error = new Error("You don't have store!");
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

exports.deleteBranch = async (req, res, next) => {
  try {
    const branchId = req.params.branchId;

    const loggedInUser = req.user;
    if (loggedInUser.owner) {
      const owner = await Owner.findById(loggedInUser.ownerId);

      if (owner.ownerHistory.length > 0) {
        if (
          owner.ownerHistory[owner.ownerHistory.length - 1].to == null ||
          owner.ownerHistory[owner.ownerHistory.length - 1].to == undefined
        ) {
          const branch = await Branch.findById(branchId);
          if (!branch) {
            const error = new Error("Could not find branch.");
            error.statusCode = 404;
            throw error;
          }

          if (
            owner.ownerHistory[owner.ownerHistory.length - 1].store ==
            branch.store
          ) {
            branch.active = false;
            branch.locked = true;
            await branch.save();

            return res.status(201).json({
              message: "Branch updated successfully!",
              data: branch,
            });
          } else {
            const error = new Error(
              "you're not an owner of the store includes this branch!"
            );
            error.statusCode = 400;
            throw error;
          }
        } else {
          const error = new Error("Not authorized as you're not an owner!");
          error.statusCode = 403;
          throw error;
        }
      } else {
        const error = new Error("You don't have store!");
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

exports.addReview = async (req, res, next) => {
  try {
    const branchId = req.params.branchId;
    const branch = await Branch.findById(branchId);
    if (!branch) {
      const error = new Error("Could not find branch.");
      error.statusCode = 404;
      throw error;
    }

    const content = req.body.content;
    const rate = req.body.rate;

    if (content != "" || rate != 0) {
      branch.reviews.push({
        user: req.user._id,
        content: content,
        rate: rate,
      });

      await branch.save();
      return res.status(201).json({
        message: "Branch review added successfully!",
        data: branch,
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
