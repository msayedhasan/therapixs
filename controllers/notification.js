const User = require("../models/stackholders/user");
const fcm = require("../startup/fcm_send");

exports.send = async (req, res, next) => {
  try {
    loggedInUser = req.user;
    if (loggedInUser.admin) {
      const message = {
        data: { title: req.body.title, message: req.body.message },
        tokens: req.body.fcmTokens,
      };

      let res = await fcm.sendMultiCast(message);
      console.log(res);
      return res.status(200).json({
        message: "Success",
        data: "Success",
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

exports.sendToAll = async (req, res, next) => {
  try {
    var fcmTokens = [];

    var notification = {
      title: "notification title",
      text: "notification subtitle",
    };

    var notification_body = {
      notification: notification,
      registration_ids: fcmTokens,
    };
  } catch (error) {}
};
