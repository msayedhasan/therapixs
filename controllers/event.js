const Event = require("../models/event");
const Group = require("../models/group");
const Leader = require("../models/stackholders/leader");

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
    const group = await Event.findById(groupId).populate({
      path: "events",
      model: "Event",
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
  try {
    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      const imageFile = req.file;
      const name = JSON.parse(req.body.name);
      const description = JSON.parse(req.body.description);

      if (!imageFile) {
        return res
          .status(422)
          .json({ message: "Attached file is not an image" });
      }

      const image = imageFile.path;

      const event = new Event({
        creator: loggedInUser._id,
        createdAt: Date.now(),
        name: name,
        description: description,
        image: image,
        public: true,
      });
      console.log(event);
      if (event.voting === true) {
        event.voting = true;
        agreedBy = [];
        disagreedBy = [];
      }

      await event.save();
      return res.status(201).json({
        message: "event added successfully!",
        data: event,
      });
    } else if (loggedInUser.leader) {
      const leader = await Leader.findById(loggedInUser.leaderId);

      if (!leader) {
        const error = new Error("Could not find your leadership.");
        error.statusCode = 404;
        throw error;
      }

      const group = await Group.findById(leader.group);
      if (!group || group.leader != leader) {
        const error = new Error("You're not a leader of a group.");
        error.statusCode = 404;
        throw error;
      }

      const imageFile = req.file;
      const name = JSON.parse(req.body.name);
      const description = JSON.parse(req.body.description);

      if (!imageFile) {
        return res
          .status(422)
          .json({ message: "Attached file is not an image" });
      }

      const image = imageFile.path;

      const event = new Event({
        creator: loggedInUser._id,
        createdAt: Date.now(),
        name: name,
        description: description,
        image: image,
      });

      if (event.public === true) {
        event.public = true;
      }

      if (event.voting === true) {
        event.voting = true;
        agreedBy = [];
        disagreedBy = [];
      }

      event.group = group._id;
      group.events.push(event._id);

      await event.save();
      await group.save();
      return res.status(201).json({
        message: "event added successfully!",
        data: event,
      });
    } else {
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

      if (!event.creator.equals(loggedInUser._id)) {
        const error = new Error("you're not the creator of this event.");
        error.statusCode = 404;
        throw error;
      }

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
          error.statusCode = 404;
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
              error.statusCode = 404;
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
            error.statusCode = 404;
            throw error;
          }
        } else {
          const error = new Error("you're not a member of group.");
          error.statusCode = 404;
          throw error;
        }
      }
    } else {
      const error = new Error("this event is not for voting.");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({ message: "event updated!" });
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
    return res.status(200).json({ message: "event updated!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
