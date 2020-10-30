const Branch = require("../../models/branch");
const Owner = require("../../models/stackholders/owner");

exports.getAll = async (req, res, next) => {
  try {
    const owners = await Owner.find({ ownerHistory: { $not: { $size: 0 } } });

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
  const managerId = req.params.managerId;
  try {
    const manager = await Manager.findById(managerId);
    if (!manager) {
      const error = new Error("Could not find manager.");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({ message: "Success", data: manager });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addBranchManager = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.owner) {
      const owner = await Owner.findById(loggedInUser.ownerId);

      if (
        owner.ownerHistory[owner.ownerHistory.length - 1].to == null ||
        owner.ownerHistory[owner.ownerHistory.length - 1].to == undefined
      ) {
        const branchId = req.params.branchId;
        const branch = await Branch.findById(branchId);

        if (!branch) {
          const error = new Error("Could not find branch.");
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

        if (user.manager) {
          const error = new Error(
            "This user is already a manager for another store."
          );
          error.statusCode = 400;
          throw error;
        }

        const oldManager = await Manager.findOne({ user: userId });
        if (oldManager) {
          user.manager = true;
          user.managerId = oldManager._id;
          await user.save();

          oldManager.managerHistory.push({
            from: Date.now(),
            branch: branchId,
          });
          await oldManager.save();

          branch.managers.push(oldManager._id);
          await branch.save();

          return res.status(201).json({
            message: "Manager updated old manager successfully!",
            data: oldManager,
          });
        }

        const manager = new Manager({
          name: user.name,
          image: user.image,
          user: userId,
          managerHistory: [
            {
              from: Date.now(),
              branch: branchId,
            },
          ],
        });

        await manager.save();

        user.manager = true;
        user.managerId = manager._id;
        await user.save();

        branch.managers.push(manager._id);
        await branch.save();

        return res.status(201).json({
          message: "Manager added successfully!",
          data: manager,
        });
      } else {
        const error = new Error("Not authorized as you're not an owner!");
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

exports.deleteBranchManager = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.owner) {
      const userId = req.params.userId;
      const user = await User.findById(userId);

      if (!user.manager) {
        const error = new Error("This user is not an manager.");
        error.statusCode = 400;
        throw error;
      }

      const manager = await Manager.findById(user.managerId);

      if (!manager) {
        const error = new Error("Couldn't find this manager.");
        error.statusCode = 404;
        throw error;
      }

      const branch = await Branch.findById(
        manager.managerHistory[manager.managerHistory.length - 1].branch
      );

      if (branch.managers.includes(manager._id)) {
        branch.managers.pull(manager._id);
      }

      await branch.save();

      manager.managerHistory[manager.managerHistory.length - 1].to = Date.now();
      await manager.save();

      user.manager = undefined;
      user.managerId = undefined;

      await user.save();

      return res.status(201).json({
        message: "manager deleted successfully!",
        data: user,
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
