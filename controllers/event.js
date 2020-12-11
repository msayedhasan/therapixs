const Event = require("../models/event");
const Group = require("../models/group");
const Leader = require("../models/stackholders/leader");
const User = require("../models/stackholders/user");

const notificationController = require("./notification");

const awsDelete = require("../startup/aws-s3-delete");

exports.getAll = async (req, res, next) => {
  try {
    let events = await Event.find().populate({
      path: "group",
      model: "Group",
    });
    return res.status(200).json({
      message: "Fetched successfully",
      data: events,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getGroupEvents = async (req, res, next) => {
  try {
    const groupId = req.params.groupId;
    const group = await Group.findById(groupId).populate({
      path: "events",
      model: "Event",
      populate: {
        path: "group",
        model: "Group",
      },
    });
    if (!group) {
      const error = new Error("Could not find your group.");
      error.statusCode = 404;
      throw error;
    }
    let events = group.events;

    return res.status(200).json({
      message: "Fetched successfully",
      data: events,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  const eventId = req.params.eventId;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      const error = new Error("Could not find event.");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({
      message: "fetched successfully",
      data: event,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addOne = async (req, res, next) => {
  // upload image if exist
  let image = "";
  if (req.file) {
    image = req.file.location;
  } else {
    const error = new Error("Upload event image.");
    error.statusCode = 401;
    throw error;
  }
  try {
    const loggedInUser = req.user;

    if (loggedInUser.admin) {
      const name = JSON.parse(req.body.name);
      const description = JSON.parse(req.body.description);
      const voting = JSON.parse(req.body.voting);
      const public = JSON.parse(req.body.public);

      const event = new Event({
        creator: loggedInUser._id,
        createdAt: Date.now(),
        image: image,
        name: name,
        description: description,
        voting: voting,
        public: true,
      });

      if (event.voting === true) {
        event.voting = true;
        event.agreedBy = [];
        event.disagreedBy = [];
      }

      await event.save();

      const users = await User.find();
      let ids = [];
      for (let index = 0; index < users.length; index++) {
        ids.push(users[index]._id);
      }

      notificationController.sendToUsers(ids, event.name, event.description);

      return res.status(201).json({
        message: "event added successfully!",
        data: event,
      });
    } else if (loggedInUser.leader && loggedInUser.group) {
      const leader = await Leader.findById(loggedInUser.leaderId);

      if (!leader) {
        await awsDelete.delete(image);

        const error = new Error("Could not find your president.");
        error.statusCode = 404;
        throw error;
      }
      const group = await Group.findById(leader.group);
      if (!group) {
        await awsDelete.delete(image);

        const error = new Error("Couldn't find the group.");
        error.statusCode = 404;
        throw error;
      }

      if (!group.leader.equals(loggedInUser.leaderId)) {
        await awsDelete.delete(image);

        const error = new Error("You're not a president of this group.");
        error.statusCode = 403;
        throw error;
      }

      const name = JSON.parse(req.body.name);
      const description = JSON.parse(req.body.description);
      const voting = JSON.parse(req.body.voting);
      const public = JSON.parse(req.body.public);

      const event = new Event({
        creator: loggedInUser._id,
        createdAt: Date.now(),
        image: image,
        name: name,
        description: description,
        voting: voting,
        public: public,
      });

      if (event.public === true) {
        event.public = true;
      }

      if (event.voting === true) {
        event.voting = true;
        event.agreedBy = [];
        event.disagreedBy = [];
      }

      event.group = group._id;
      group.events.push(event._id);

      await event.save();
      await group.save();

      notificationController.sendToUsers(
        group.members,
        event.name,
        event.description
      );

      return res.status(201).json({
        message: "event added successfully!",
        data: event,
      });
    } else {
      await awsDelete.delete(image);

      const error = new Error(
        "Not authorized as you're not a leader of a group!"
      );
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
  const loggedInUser = req.user;
  const eventId = req.params.eventId;
  try {
    if (loggedInUser.admin) {
      const event = await Event.findById(eventId);
      if (!event) {
        const error = new Error("Could not find event.");
        error.statusCode = 404;
        throw error;
      }

      await awsDelete.delete(event.image);
      await Event.findByIdAndDelete(eventId);
      return res.status(200).json({ message: "event deleted!" });
    } else if (loggedInUser.leader) {
      const event = await Event.findById(eventId);
      if (!event) {
        const error = new Error("Could not find event.");
        error.statusCode = 404;
        throw error;
      }

      const group = await Event.findById(event.group);
      if (!group) {
        const error = new Error("Could not find group.");
        error.statusCode = 404;
        throw error;
      }

      if (group.leader === loggedInUser.leaderId) {
        group.events.pull(eventId);

        await group.save();

        await awsDelete.delete(event.image);
        await Event.findByIdAndDelete(eventId);

        return res.status(200).json({ message: "event deleted!" });
      } else {
        const error = new Error("Not authorized!");
        error.statusCode = 403;
        throw error;
      }
    } else {
      const error = new Error("Not a leader!");
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

exports.agreeOne = async (req, res, next) => {
  const loggedInUser = req.user;
  const eventId = req.params.eventId;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      const error = new Error("Could not find event.");
      error.statusCode = 404;
      throw error;
    }

    // check if event is for voting
    if (event.voting) {
      // if event is public
      if (event.public) {
        if (event.agreedBy.includes(loggedInUser._id)) {
          const error = new Error("you're already agree this event.");
          error.statusCode = 403;
          throw error;
        } else {
          if (event.disagreedBy.includes(loggedInUser._id)) {
            event.disagreedBy.pull(loggedInUser._id);
          }
          event.agreedBy.push(loggedInUser._id);
          await event.save();
        }
      } else {
        // if event for specific group
        if (loggedInUser.group) {
          if (loggedInUser.group === event.group) {
            if (event.agreedBy.includes(loggedInUser._id)) {
              const error = new Error("you're already agreed this event.");
              error.statusCode = 401;
              throw error;
            } else {
              if (event.disagreedBy.includes(loggedInUser._id)) {
                event.disagreedBy.pull(loggedInUser._id);
              }
              event.agreedBy.push(loggedInUser._id);
              await event.save();
            }
          } else {
            const error = new Error("you're not a member of this group.");
            error.statusCode = 403;
            throw error;
          }
        } else {
          const error = new Error("you're not a member of group.");
          error.statusCode = 403;
          throw error;
        }
      }
    } else {
      const error = new Error("this event is not for voting.");
      error.statusCode = 401;
      throw error;
    }
    return res.status(200).json({ message: "event updated!", data: "Done" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.disagreeOne = async (req, res, next) => {
  const loggedInUser = req.user;
  const eventId = req.params.eventId;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      const error = new Error("Could not find event.");
      error.statusCode = 404;
      throw error;
    }

    // check if event is for voting
    if (event.voting) {
      // if event is public
      if (event.public) {
        if (event.disagreedBy.includes(loggedInUser._id)) {
          const error = new Error("you're already disagree this event.");
          error.statusCode = 404;
          throw error;
        } else {
          if (event.agreedBy.includes(loggedInUser._id)) {
            event.agreedBy.pull(loggedInUser._id);
          }
          event.disagreedBy.push(loggedInUser._id);
          await event.save();
        }
      } else {
        // if event for specific group
        if (loggedInUser.group) {
          if (loggedInUser.group === event.group) {
            if (event.disagreedBy.includes(loggedInUser._id)) {
              const error = new Error("you're aleady disagreed this event.");
              error.statusCode = 404;
              throw error;
            } else {
              if (event.agreedBy.includes(loggedInUser._id)) {
                event.agreedBy.pull(loggedInUser._id);
              }
              event.disagreedBy.push(loggedInUser._id);
              await event.save();
            }
          } else {
            const error = new Error("you're not a member of this group.");
            error.statusCode = 404;
            throw error;
          }
        } else {
          const error = new Error("you're not a member of any group.");
          error.statusCode = 404;
          throw error;
        }
      }
    } else {
      const error = new Error("this event is not for voting.");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({ message: "event updated!", data: "Done" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// **//**//*//*//*/**//*/**/*/*//*/* */ */ */
// Mobile app api

exports.appAddOne = async (req, res, next) => {
  // upload image if exist
  let image = "";
  if (req.file) {
    image = req.file.location;
  } else {
    const error = new Error("Upload event image.");
    error.statusCode = 401;
    throw error;
  }
  try {
    const loggedInUser = req.user;

    if (loggedInUser.admin) {
      const name = req.body.name;
      const description = req.body.description;
      const voting = req.body.voting;
      const public = req.body.public;

      const event = new Event({
        creator: loggedInUser._id,
        createdAt: Date.now(),
        image: image,
        name: name,
        description: description,
        voting: voting,
        public: true,
      });

      if (event.voting === true) {
        event.voting = true;
        event.agreedBy = [];
        event.disagreedBy = [];
      }

      await event.save();

      const users = await User.find();
      let ids = [];
      for (let index = 0; index < users.length; index++) {
        ids.push(users[index]._id);
      }

      notificationController.sendToUsers(ids, event.name, event.description);

      return res.status(201).json({
        message: "event added successfully!",
        data: event,
      });
    } else if (loggedInUser.leader && loggedInUser.group) {
      const leader = await Leader.findById(loggedInUser.leaderId);

      if (!leader) {
        await awsDelete.delete(image);

        const error = new Error("Could not find your president.");
        error.statusCode = 404;
        throw error;
      }
      const group = await Group.findById(leader.group);
      if (!group) {
        await awsDelete.delete(image);

        const error = new Error("Couldn't find the group.");
        error.statusCode = 404;
        throw error;
      }

      if (!group.leader.equals(loggedInUser.leaderId)) {
        await awsDelete.delete(image);

        const error = new Error("You're not a president of this group.");
        error.statusCode = 403;
        throw error;
      }

      const name = req.body.name;
      const description = req.body.description;
      const voting = req.body.voting;
      const public = req.body.public;

      const event = new Event({
        creator: loggedInUser._id,
        createdAt: Date.now(),
        image: image,
        name: name,
        description: description,
        voting: voting,
        public: public,
      });

      if (event.public === true) {
        event.public = true;
      }

      if (event.voting === true) {
        event.voting = true;
        event.agreedBy = [];
        event.disagreedBy = [];
      }

      event.group = group._id;
      group.events.push(event._id);

      await event.save();
      await group.save();

      notificationController.sendToUsers(
        group.members,
        event.name,
        event.description
      );

      return res.status(201).json({
        message: "event added successfully!",
        data: event,
      });
    } else {
      await awsDelete.delete(image);

      const error = new Error(
        "Not authorized as you're not a leader of a group!"
      );
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
