const User = require("../models/stackholders/user");
const fcm = require("../startup/fcm_send");

exports.send = async(req, res, next) => {
    try {
        console.log("single user notification");
        loggedInUser = req.user;
        if (loggedInUser.admin) {
            const message = {
                notification: { title: req.body.title, body: req.body.message },
                data: { title: req.body.title, message: req.body.message },
                token: req.body.fcmTokens[0],
            };

            let fcmResponse = await fcm.send(message);
            return res.status(200).json({
                message: "Sent successfuly",
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

exports.sendMultiCast = async(req, res, next) => {
    try {
        console.log("Multicast");
        loggedInUser = req.user;
        if (loggedInUser.admin) {
            const message = {
                notification: { title: req.body.title, body: req.body.message },
                data: { title: req.body.title, message: req.body.message },
                tokens: req.body.fcmTokens,
            };

            let fcmResponse = await fcm.sendMultiCast(message);

            if (fcmResponse.failureCount > 0) {
                const failedTokens = [];
                fcmResponse.responses.forEach((resp, idx) => {
                    if (!resp.success) {
                        failedTokens.push(req.body.fcmTokens[idx]);
                    }
                });
                return res.status(400).json({
                    message: `Couldn't send to ${failedTokens.length} device(s) of ${req.body.fcmTokens.length} devices`,
                });
            } else {
                return res.status(200).json({
                    message: "Success",
                    data: "Success",
                });
            }
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

exports.sendAll = async(req, res, next) => {
    try {
        console.log("send notification to all");
        loggedInUser = req.user;
        if (loggedInUser.admin) {
            const users = await User.find();
            let tokens = [];

            for (let index = 0; index < users.length; index++) {
                const user = users[index];
                if (user.fcmToken && user.fcmToken !== "") {
                    tokens.push(user.fcmToken);
                }
            }

            failedNotificationLength = 0;
            ///////
            var i,
                j,
                tokensChunk,
                chunk = 500;
            for (i = 0, j = tokens.length; i < j; i += chunk) {
                tokensChunk = tokens.slice(i, i + chunk);

                console.log(tokensChunk.length);
                const message = {
                    notification: { title: req.body.title, body: req.body.message },
                    data: { title: req.body.title, message: req.body.message },
                    tokens: tokensChunk,
                };

                let fcmResponse = await fcm.sendMultiCast(message);

                if (fcmResponse.failureCount > 0) {
                    fcmResponse.responses.forEach((resp, idx) => {
                        if (!resp.success) {
                            failedNotificationLength = +1;
                        }
                    });
                }
            }
            ///////

            // // const message = {
            // //   notification: { title: req.body.title, body: req.body.message },
            // //   data: { title: req.body.title, message: req.body.message },
            // //   tokens: tokens,
            // // };

            // // let fcmResponse = await fcm.sendMultiCast(message);

            // if (fcmResponse.failureCount > 0) {
            //   const failedTokens = [];
            //   fcmResponse.responses.forEach((resp, idx) => {
            //     if (!resp.success) {
            //       failedTokens.push(req.body.fcmTokens[idx]);
            //     }
            //   });
            //   return res.status(400).json({
            //     message: `Couldn't send to ${failedTokens.length} device(s) of ${req.body.fcmTokens.length} devices`,
            //   });
            // } else {
            //   return res.status(200).json({
            //     message: "Success",
            //     data: "Success",
            //   });
            // }
            if (failedNotificationLength > 0) {
                return res.status(400).json({
                    message: `Couldn't send to ${failedNotificationLength} device(s) of ${users.length} devices`,
                });
            } else {
                return res.status(200).json({
                    message: "Success",
                    data: "Success",
                });
            }
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

exports.sendToDevice = async(req, res, next) => {
    try {
        console.log("single user notification");
        loggedInUser = req.user;
        if (loggedInUser.admin) {
            const message = {
                notification: { title: req.body.title, body: req.body.message },
                data: { title: req.body.title, message: req.body.message },
            };

            let fcmResponse = await fcm.sendToDevice(req.body.fcmTokens[0], message);
            console.log(fcmResponse);
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

exports.sendToUsers = async(ids, sendTitle, sendMessage) => {
    try {
        console.log("sendToUsers");
        let fcmTokens = [];
        for (let index = 0; index < ids.length; index++) {
            const userId = ids[index];
            const user = await User.findById(userId);
            if (user && user.fcmToken) {
                fcmTokens.push(user.fcmToken);
            }
        }

        if (fcmTokens.length > 0) {
            const message = {
                notification: { title: sendTitle, body: sendMessage },
                data: { title: sendTitle, message: sendMessage },
                tokens: fcmTokens,
            };

            let fcmResponse = await fcm.sendMultiCast(message);
            console.log("sent to users");
        } else {
            console.log("no user have fcm token");
        }
    } catch (err) {
        console.log(err);
    }
};