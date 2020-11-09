const Group = require("../models/group");
const Leader = require("../models/stackholders/leader");
const User = require("../models/stackholders/user");

exports.getAll = async (req, res, next) => {
  try {
    const groups = await Group.find();

    return res.status(200).json({
      message: "Success",
      data: groups,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  const groupId = req.params.groupId;
  try {
    const group = await Group.findById(groupId)
      .populate({
        path: "leader",
        model: "Leader",
      })
      .populate({
        path: "creator",
        model: "User",
      });
    if (!group) {
      const error = new Error("Could not find group.");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({ message: "Success", data: group });
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
    if (loggedInUser.admin) {
      const name = JSON.parse(req.body.name);
      const imageFile = req.file;
      if (!imageFile) {
        return res
          .status(422)
          .json({ message: "Attached file is not an image" });
      }
      const image = imageFile.path;

      const existedGroup = await Group.findOne({ name: name });
      if (existedGroup) {
        const error = new Error("Group with this name is already exists");
        error.statusCode = 400;
        throw error;
      }

      const group = new Group({
        name: name,
        image: image,
        creator: loggedInUser._id,
        createdAt: Date.now(),
      });
      await group.save();

      return res.status(201).json({
        message: "Group added successfully!",
        data: group,
      });
    }
    if (loggedInUser.leader) {
      const leader = await Leader.findById(loggedInUser.leaderId);

      if (leader.leaderHistory.length > 0) {
        if (
          leader.leaderHistory[leader.leaderHistory.length - 1].to == null ||
          leader.leaderHistory[leader.leaderHistory.length - 1].to == undefined
        ) {
          const error = new Error("You're already an leader of a group.");
          error.statusCode = 400;
          throw error;
        }
      }

      const name = JSON.parse(req.body.name);
      const imageFile = req.file;
      if (!imageFile) {
        return res
          .status(422)
          .json({ message: "Attached file is not an image" });
      }
      const image = imageFile.path;

      const existedGroup = await Group.findOne({ name: name });
      if (existedGroup) {
        const error = new Error("Group with this name is already exists");
        error.statusCode = 400;
        throw error;
      }

      const group = new Group({
        name: name,
        image: image,
        creator: loggedInUser._id,
        leader: leader._id,
        createdAt: Date.now(),
      });
      await group.save();

      leader.ownerHistory.push({
        from: Date.now(),
        group: group._id,
      });
      leader.group = group;
      await leader.save();

      return res.status(201).json({
        message: "Group added successfully!",
        data: group,
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
    if (loggedInUser.admin) {
      const groupId = req.params.groupId;
      const group = await Group.findById(groupId);

      if (!group) {
        const error = new Error("Could not find group.");
        error.statusCode = 404;
        throw error;
      }

      const name = JSON.parse(req.body.name);
      const imageFile = req.file;
      let image;
      if (imageFile) {
        image = imageFile.path;
      } else {
        image = group.image;
      }

      const oldGroup = await Group.findOne({ name: name });
      if (oldGroup) {
        const error = new Error("Group with this name is already exist");
        error.statusCode = 400;
        throw error;
      }

      group.name = name;
      group.image = image;
      await group.save();

      return res.status(201).json({
        message: "Group updated successfully!",
        data: group,
      });
    } else if (loggedInUser.leader) {
      const groupId = req.params.groupId;
      const group = await Group.findById(groupId);

      if (!group) {
        const error = new Error("Could not find group.");
        error.statusCode = 404;
        throw error;
      }

      if (group.leader === loggedInUser.leaderId) {
        const name = JSON.parse(req.body.name);
        const imageFile = req.file;
        let image;
        if (imageFile) {
          image = imageFile.path;
        } else {
          image = group.image;
        }

        const oldGroup = await Group.findOne({ name: name });
        if (oldGroup) {
          const error = new Error("Group with this name is already exist");
          error.statusCode = 400;
          throw error;
        }

        group.name = name;
        group.image = image;
        await group.save();

        return res.status(201).json({
          message: "Group updated successfully!",
          data: group,
        });
      } else {
        const error = new Error(
          "Not authorized as you're not a leader of this group!"
        );
        error.statusCode = 403;
        throw error;
      }
    } else {
      const error = new Error(
        "Not authorized as you're not a leader or admin!"
      );
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
    const groupId = req.params.groupId;
    if (loggedInUser.admin) {
      const group = await Group.findById(groupId);
      if (!group) {
        const error = new Error("Could not find group.");
        error.statusCode = 404;
        throw error;
      }

      // Start deleting members of the group
      for (let index = 0; index < group.members.length; index++) {
        let member = await User.findById(group.members[index]);
        if (member) {
          member.group = undefined;
          await member.save();
        }
      }
      // End deleting members of the group

      // Start deleting events
      if (group.events) {
        for (let index = 0; index < group.events.length; index++) {
          await Event.findByIdAndDelete(group.events[index]);
        }
      }
      // End deleting events

      // Start deleting leadership
      const leader = await Leader.findById(group.leader);
      if (leader) {
        leader.leaderHistory[leader.leaderHistory.length - 1].to = Date.now();
        leader.group = undefined;
        await leader.save();
      }
      // End deleting leadership

      // Start deleting group
      await Group.findByIdAndDelete(groupId);
      // End deleting group
      return res.status(200).json({ message: "Group deleted!" });
    }
    //  else if (loggedInUser.owner) {
    //   const groupId = req.params.groupId;
    //   const group = await Group.findById(groupId);
    //   if (!group) {
    //     const error = new Error("Could not find group.");
    //     error.statusCode = 404;
    //     throw error;
    //   }

    //   if (group.owners.includes(loggedInUser.ownerId)) {
    //     group.active = false;
    //     await group.save();

    //     return res.status(201).json({
    //       message: "Group inactivated successfully!",
    //       data: group,
    //     });
    //   } else {
    //     const error = new Error(
    //       "Not authorized as you're not an owner of this group!"
    //     );
    //     error.statusCode = 403;
    //     throw error;
    //   }
    // }
    else {
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

exports.lockOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    const groupId = req.params.groupId;
    if (loggedInUser.admin) {
      const group = await Group.findById(groupId);
      if (!group) {
        const error = new Error("Could not find group.");
        error.statusCode = 404;
        throw error;
      }

      if (group.locked) {
        const error = new Error("group is already locked.");
        error.statusCode = 404;
        throw error;
      }

      group.locked = true;
      group.lockedBy = loggedInUser._id;
      await group.save();

      return res.status(200).json({ message: "Group locked!" });
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
    const groupId = req.params.groupId;
    if (loggedInUser.admin) {
      const group = await Group.findById(groupId);
      if (!group) {
        const error = new Error("Could not find group.");
        error.statusCode = 404;
        throw error;
      }

      if (!group.locked) {
        const error = new Error("group is already unlocked.");
        error.statusCode = 404;
        throw error;
      }

      group.locked = false;
      group.unlockedBy = loggedInUser._id;
      await group.save();

      return res.status(200).json({ message: "Group unlocked!" });
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
//     const stores = await Group.find({
//       branches: { $not: { $size: 0 } },
//     }).populate({
//       path: "owners",
//       model: "Leader",
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
