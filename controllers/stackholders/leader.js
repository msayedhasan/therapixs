const Leader = require("../../models/stackholders/leader");
const User = require("../../models/stackholders/user");
const Group = require("../../models/group");

exports.getAll = async (req, res, next) => {
  try {
    const leaders = await User.find({
      leaderId: { $exists: true },
    }).populate({
      path: "leaderId",
      model: "Leader",
      populate: { path: "group", model: "Group" },
    });

    return res.status(200).json({
      message: "Success",
      data: leaders,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  const leaderId = req.params.leaderId;
  try {
    const leader = await Leader.findById(leaderId);
    if (!leader) {
      const error = new Error("Could not find leader.");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({ message: "Success", data: leader });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addLeader = async (req, res, next) => {
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
      if (user.leader) {
        const error = new Error("This user is already a leader.");
        error.statusCode = 400;
        throw error;
      }

      const oldLeader = await Leader.findOne({ user: userId });
      if (oldLeader) {
        user.leader = true;
        user.leaderId = oldLeader._id;
        await user.save();

        return res.status(201).json({
          message: "Leader updated old leader successfully!",
          data: oldLeader,
        });
      }

      const leader = new Leader({
        user: user._id,
      });

      await leader.save();

      user.leader = true;
      user.leaderId = leader._id;
      await user.save();

      return res.status(201).json({
        message: "Leader added successfully!",
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

exports.addLeaderToGroup = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      const groupId = req.params.groupId;

      const group = await Group.findById(groupId);

      if (!group) {
        const error = new Error("Could not find group.");
        error.statusCode = 404;
        throw error;
      }

      if (!group.leader) {
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

        if (!user.leader) {
          const error = new Error("This user isn't a leader.");
          error.statusCode = 400;
          throw error;
        }

        const oldLeader = await Leader.findOne({ user: userId });
        if (oldLeader) {
          user.leader = true;
          user.leaderId = oldLeader._id;

          oldLeader.leaderHistory.push({
            from: Date.now(),
            group: groupId,
          });

          oldLeader.group = group._id;

          group.leader = oldLeader._id;
          await group.save();
          await user.save();
          await oldLeader.save();

          return res.status(201).json({
            message: "Leader updated old leader successfully!",
            data: oldLeader,
          });
        }

        const leader = new Leader({
          user: userId,
          leaderHistory: [
            {
              from: Date.now(),
              group: groupId,
            },
          ],
          group: group,
        });

        await leader.save();

        user.leader = true;
        user.leaderId = leader._id;
        await user.save();

        group.leader = leader;
        await group.save();

        return res.status(201).json({
          message: "Leader added successfully!",
          data: user,
        });
      } else {
        const error = new Error("this group has its leader!");
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

exports.lockLeader = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      const leaderId = req.params.leaderId;
      const leader = await Leader.findById(leaderId);

      if (leader.locked) {
        const error = new Error("This leader is already locked.");
        error.statusCode = 400;
        throw error;
      }

      leader.locked = true;

      await leader.save();

      return res.status(201).json({
        message: "Leader added successfully!",
        data: leader,
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

exports.unlockLeader = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      const leaderId = req.params.leaderId;
      const leader = await Leader.findById(leaderId);

      if (!leader.locked) {
        const error = new Error("This leader is already unlocked.");
        error.statusCode = 400;
        throw error;
      }

      leader.locked = false;

      await leader.save();

      return res.status(201).json({
        message: "Leader added successfully!",
        data: leader,
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

exports.deleteLeader = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      const userId = req.params.userId;
      const user = await User.findById(userId);

      if (!user.leader) {
        const error = new Error("This user is not an leader.");
        error.statusCode = 400;
        throw error;
      }

      const leader = await Leader.findById(user.leaderId);
      if (!leader) {
        const error = new Error("couldn't find this leader.");
        error.statusCode = 400;
        throw error;
      }

      if (leader.leaderHistory.length > 0) {
        if (!leader.leaderHistory[leader.leaderHistory.length - 1].to) {
          const group = await Group.findById(
            leader.leaderHistory[leader.leaderHistory.length - 1].group
          );

          group.leader = undefined;

          await group.save();

          leader.leaderHistory[leader.leaderHistory.length - 1].to = Date.now();
          leader.group = undefined;
          await leader.save();
        }
      }

      user.leader = undefined;
      user.leaderId = undefined;

      await user.save();

      return res.status(201).json({
        message: "Leadership deleted successfully!",
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
