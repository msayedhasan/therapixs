const Group = require("../models/group");
const Leader = require("../models/stackholders/leader");
const User = require("../models/stackholders/user");

const awsDelete = require("../startup/aws-s3-delete");

exports.getAll = async(req, res, next) => {
    try {
        const groups = await Group.find().populate({
            path: "leader",
            model: "Leader",
            populate: {
                path: "user",
                model: "User",
            },
        });

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

exports.getOne = async(req, res, next) => {
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

exports.addOne = async(req, res, next) => {
    try {
        const loggedInUser = req.user;

        let image;
        if (req.file) {
            image = req.file.location;
        }

        if (loggedInUser.admin) {
            const name = JSON.parse(req.body.name);

            const existedGroup = await Group.findOne({ name: name });
            if (existedGroup) {
                await awsDelete.delete(image);

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
                    await awsDelete.delete(image);

                    const error = new Error("You're already an leader of a group.");
                    error.statusCode = 400;
                    throw error;
                }
            }

            const name = JSON.parse(req.body.name);

            const existedGroup = await Group.findOne({ name: name });
            if (existedGroup) {
                await awsDelete.delete(image);

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
            await awsDelete.delete(image);

            const error = new Error("Not authorized as you're not a leader!");
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

exports.updateOne = async(req, res, next) => {
    try {
        const loggedInUser = req.user;

        let image;
        if (req.file) {
            image = req.file.location;
        } else {
            image = group.image;
        }

        if (loggedInUser.admin) {
            const groupId = req.params.groupId;
            const group = await Group.findById(groupId);

            if (!group) {
                if (req.file) {
                    await awsDelete.delete(req.file.location);
                }
                const error = new Error("Could not find group.");
                error.statusCode = 404;
                throw error;
            }

            const name = JSON.parse(req.body.name);

            const oldGroup = await Group.findOne({ name: name });
            if (oldGroup) {
                if (req.file) {
                    await awsDelete.delete(req.file.location);
                }
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
                if (req.file) {
                    await awsDelete.delete(req.file.location);
                }
                const error = new Error("Could not find group.");
                error.statusCode = 404;
                throw error;
            }

            if (group.leader === loggedInUser.leaderId) {
                const name = JSON.parse(req.body.name);

                const oldGroup = await Group.findOne({ name: name });
                if (oldGroup) {
                    if (req.file) {
                        await awsDelete.delete(req.file.location);
                    }
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
                if (req.file) {
                    await awsDelete.delete(req.file.location);
                }
                const error = new Error(
                    "Not authorized as you're not a leader of this group!"
                );
                error.statusCode = 403;
                throw error;
            }
        } else {
            if (req.file) {
                await awsDelete.delete(req.file.location);
            }
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

exports.deleteOne = async(req, res, next) => {
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
            await awsDelete.delete(group.image);
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

exports.lockOne = async(req, res, next) => {
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

exports.unlockOne = async(req, res, next) => {
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

exports.requestToJoin = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        const groupId = req.params.groupId;
        const group = await Group.findById(groupId);
        if (loggedInUser.admin || loggedInUser.leader) {
            const error = new Error(
                "Can't be member of group as you`re admin or leader."
            );
            error.statusCode = 401;
            throw error;
        }

        if (!group) {
            const error = new Error("Could not find group.");
            error.statusCode = 404;
            throw error;
        }

        // not member of any other groups
        if (loggedInUser.group) {
            const error = new Error("You're already member of group.");
            error.statusCode = 401;
            throw error;
        }

        // if he's member of the group
        if (group.members.includes(loggedInUser._id)) {
            const error = new Error("You're already member.");
            error.statusCode = 401;
            throw error;
        }

        // if he sent request to the group
        if (group.requests.includes(loggedInUser._id)) {
            const error = new Error("Request sent.");
            error.statusCode = 401;
            throw error;
        }

        group.requests.push(loggedInUser._id);
        await group.save();
        loggedInUser.groupRequest = groupId;
        await loggedInUser.save();
        return res.status(200).json({ message: "Request sent!" });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.acceptRequestToJoin = async(req, res, next) => {
    try {
        const loggedInUser = req.user;

        if (!loggedInUser.admin && !loggedInUser.leader) {
            const error = new Error("Not authorized to accept.");
            error.statusCode = 404;
            throw error;
        }

        const userId = req.params.userId;
        const groupId = req.params.groupId;
        const group = await Group.findById(groupId);
        if (!group) {
            const error = new Error("Could not find group.");
            error.statusCode = 404;
            throw error;
        }
        const user = await User.findById(userId);
        if (!user) {
            const error = new Error("Could not find user.");
            error.statusCode = 404;
            throw error;
        }
        // make sure leader of this group
        if (loggedInUser.leader) {
            const leaderId = loggedInUser.leaderId;
            const leader = await Leader.findById(leaderId);
            if (!leader) {
                const error = new Error("Could not find leader.");
                error.statusCode = 404;
                throw error;
            }

            if (!group.leader.equals(leaderId)) {
                const error = new Error("you're not leader of this group.");
                error.statusCode = 404;
                throw error;
            }
        }

        // check user has group or not
        if (user.group) {
            const error = new Error("this user already member of group.");
            error.statusCode = 404;
            throw error;
        }

        if (group.members.includes(userId)) {
            const error = new Error("this user is already member.");
            error.statusCode = 404;
            throw error;
        }

        if (!group.requests.includes(userId)) {
            const error = new Error("the user hasn't sent request.");
            error.statusCode = 404;
            throw error;
        }

        group.requests.pull(userId);
        group.members.push(userId);
        await group.save();
        user.groupRequest = undefined;
        user.group = groupId;
        await user.save();
        return res.status(200).json({ message: "Request accepted!" });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.deleteRequestToJoin = async(req, res, next) => {
    try {
        const loggedInUser = req.user;

        if (!loggedInUser.admin && !loggedInUser.leader) {
            const error = new Error("Not authorized to accept.");
            error.statusCode = 404;
            throw error;
        }

        const userId = req.params.userId;
        const groupId = req.params.groupId;
        const group = await Group.findById(groupId);
        if (!group) {
            const error = new Error("Could not find group.");
            error.statusCode = 404;
            throw error;
        }
        const user = await User.findById(userId);
        if (!user) {
            const error = new Error("Could not find user.");
            error.statusCode = 404;
            throw error;
        }
        // make sure leader of this group
        if (loggedInUser.leader) {
            const leaderId = loggedInUser.leaderId;
            const leader = await Leader.findById(leaderId);
            if (!leader) {
                const error = new Error("Could not find leader.");
                error.statusCode = 404;
                throw error;
            }

            if (!group.leader.equals(leaderId)) {
                const error = new Error("you're not leader of this group.");
                error.statusCode = 401;
                throw error;
            }
        }

        // check user has group or not
        if (user.group) {
            const error = new Error("this user already member of group.");
            error.statusCode = 401;
            throw error;
        }

        if (group.members.includes(userId)) {
            const error = new Error("this user is already member.");
            error.statusCode = 401;
            throw error;
        }

        if (!group.requests.includes(userId)) {
            const error = new Error("the user hasn't sent request.");
            error.statusCode = 401;
            throw error;
        }

        group.requests.pull(userId);
        await group.save();
        user.groupRequest = undefined;
        await user.save();
        return res.status(200).json({ message: "Request deleted!" });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.cancelRequestToJoin = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        if (!loggedInUser.groupRequest) {
            const error = new Error("No request to cancel.");
            error.statusCode = 404;
            throw error;
        }

        const group = await Group.findById(loggedInUser.groupRequest);
        if (!group) {
            const error = new Error("Could not find group.");
            error.statusCode = 404;
            throw error;
        }
        // if he sent request to the group
        if (!group.requests.includes(loggedInUser._id)) {
            const error = new Error("No request in group to cancel.");
            error.statusCode = 404;
            throw error;
        }

        group.requests.pull(loggedInUser._id);
        await group.save();
        loggedInUser.groupRequest = undefined;
        await loggedInUser.save();
        return res.status(200).json({ message: "Request cancelled!" });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.groupRequests = async(req, res, next) => {
    const groupId = req.params.groupId;
    try {
        const group = await Group.findById(groupId).populate({
            path: "requests",
            model: "User",
        });

        if (!group) {
            const error = new Error("Could not find group.");
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: "Success", data: group.requests });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};