"use strict";

var SMS = require("../startup/sms_send");

require("dotenv/config");

var _require = require("../config/index"),
    JWT_SECRET = _require.JWT_SECRET;

var bcrypt = require("bcryptjs");

var cookie = require("cookie");

var jwt = require("jsonwebtoken");

var User = require("../models/stackholders/user");

setToken = function setToken(user) {
  return jwt.sign({
    iat: new Date().getTime(),
    userId: user._id.toString()
  }, process.env.JWT_SECRET // JWT_SECRET
  // { expiresIn: "1h" }
  );
};

generateOTP = function generateOTP() {
  // Declare a digits variable
  // which stores all digits
  var digits = "0123456789";
  var OTP = "";

  for (var i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }

  return OTP;
};

exports.signup = function _callee(req, res, next) {
  var name, phone, password, address, fcmToken, user, error, newUser, token;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("sign up");
          name = req.body.name; //   const email = req.body.email;

          phone = parseInt(req.body.phone);
          password = req.body.password;
          address = req.body.address;

          if (req.body.fcmToken) {
            fcmToken = req.body.fcmToken;
          } else {
            fcmToken = "";
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 12));

        case 8:
          hashedPassword = _context.sent;
          _context.prev = 9;
          _context.next = 12;
          return regeneratorRuntime.awrap(User.findOne({
            phone: phone
          }));

        case 12:
          user = _context.sent;

          if (!user) {
            _context.next = 17;
            break;
          }

          error = new Error("user phone existed");
          error.statusCode = 401;
          throw error;

        case 17:
          newUser = new User({
            name: name,
            phone: phone,
            methods: ["phone"],
            local: {
              password: hashedPassword
            },
            address: address,
            fcmToken: fcmToken
          }); // let generatedOTP = generateOTP();
          // console.log("generateOTP");
          // let smsRes = await SMS.send(
          //   newUser.phone,
          //   `Your MotoBar OTP is ${generatedOTP}`
          // );
          // if (smsRes) {
          //   if (smsRes[0] && smsRes[0].type === "success") {
          //     newUser.otp = generatedOTP;
          //     newUser.otpVerified = false;
          //     await newUser.save();
          //     const token = setToken(newUser);
          //     return res.status(201).json({
          //       message: "Success",
          //       token: token,
          //     });
          //   } else {
          //     console.log("smsRes error");
          //     console.log(smsRes);
          //     const error = new Error(smsRes.error.msg);
          //     error.statusCode = 400;
          //     throw error;
          //     newUser.otp = 2222;
          //     newUser.otpVerified = false;

          newUser.otpVerified = true;
          _context.next = 21;
          return regeneratorRuntime.awrap(newUser.save());

        case 21:
          token = setToken(newUser);
          return _context.abrupt("return", res.status(201).json({
            message: "Success",
            token: token
          }));

        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](9);

          if (!_context.t0.statusCode) {
            _context.t0.statusCode = 500;
          }

          next(_context.t0);

        case 29:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[9, 25]]);
};

exports.login = function _callee2(req, res, next) {
  var phone, password, user, error, _error, fcmToken, token;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // const email = req.body.email;
          phone = parseInt(req.body.phone);
          password = req.body.password;
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(User.findOne({
            phone: phone
          }));

        case 5:
          user = _context2.sent;

          if (user) {
            _context2.next = 10;
            break;
          }

          error = new Error("user not found");
          error.statusCode = 401;
          throw error;

        case 10:
          _context2.next = 12;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.local.password));

        case 12:
          isEqual = _context2.sent;

          if (isEqual) {
            _context2.next = 17;
            break;
          }

          _error = new Error("Wrong password");
          _error.statusCode = 401;
          throw _error;

        case 17:
          fcmToken = req.body.fcmToken;

          if (!fcmToken && !user.fcmToken) {
            user.fcmToken = undefined;
          } else if (fcmToken) {
            user.fcmToken = fcmToken;
          }

          _context2.next = 21;
          return regeneratorRuntime.awrap(user.save());

        case 21:
          token = setToken(user);
          res.cookie("jwt", token, {
            maxAge: 3600,
            httpOnly: true,
            secure: true
          });
          res.setHeader("Set-Cookie", cookie.serialize("token", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7 // 1 week

          }));
          return _context2.abrupt("return", res.status(200).json({
            message: "Logged in successfully",
            admin: user.admin,
            owner: user.owner,
            shipper: user.shipper,
            store: user.store,
            token: token
          }));

        case 27:
          _context2.prev = 27;
          _context2.t0 = _context2["catch"](2);

          if (!_context2.t0.statusCode) {
            _context2.t0.statusCode = 500;
          }

          next(_context2.t0);

        case 31:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 27]]);
};

exports.resetPassword = function _callee3(req, res, next) {
  var phone, user, error, generatedOTP, smsRes, token, _error2, _error3;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("reset password");
          phone = parseInt(req.body.phone);
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(User.findOne({
            phone: phone
          }));

        case 5:
          user = _context3.sent;

          if (user) {
            _context3.next = 10;
            break;
          }

          error = new Error("user not found");
          error.statusCode = 400;
          throw error;

        case 10:
          generatedOTP = generateOTP();
          _context3.next = 13;
          return regeneratorRuntime.awrap(SMS.send(user.phone, "Your MotoBar OTP is ".concat(generatedOTP)));

        case 13:
          smsRes = _context3.sent;

          if (!smsRes) {
            _context3.next = 30;
            break;
          }

          if (!(smsRes[0] && smsRes[0].type === "success")) {
            _context3.next = 25;
            break;
          }

          user.otp = generatedOTP;
          user.otpVerified = false;
          user.resetPassword = true;
          _context3.next = 21;
          return regeneratorRuntime.awrap(user.save());

        case 21:
          token = setToken(user);
          return _context3.abrupt("return", res.status(201).json({
            message: "Success",
            token: token
          }));

        case 25:
          _error2 = new Error(smsRes.error.msg);
          _error2.statusCode = 400;
          throw _error2;

        case 28:
          _context3.next = 33;
          break;

        case 30:
          _error3 = new Error("Failed to send OTP");
          _error3.statusCode = 400;
          throw _error3;

        case 33:
          _context3.next = 39;
          break;

        case 35:
          _context3.prev = 35;
          _context3.t0 = _context3["catch"](2);

          if (!_context3.t0.statusCode) {
            _context3.t0.statusCode = 500;
          }

          next(_context3.t0);

        case 39:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 35]]);
};

exports.verifyOtp = function _callee4(req, res, next) {
  var phone, otp, user, error, _error4, token;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          phone = parseInt(req.body.phone);
          otp = parseInt(req.body.otp);
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(User.findOne({
            phone: phone
          }));

        case 5:
          user = _context4.sent;

          if (user) {
            _context4.next = 10;
            break;
          }

          error = new Error("user not found");
          error.statusCode = 400;
          throw error;

        case 10:
          console.log(user);
          console.log(user.otp);
          console.log(otp);

          if (!(user.otp !== otp)) {
            _context4.next = 17;
            break;
          }

          _error4 = new Error("Invalid OTP");
          _error4.statusCode = 400;
          throw _error4;

        case 17:
          user.otp = undefined;
          user.otpVerified = true;
          _context4.next = 21;
          return regeneratorRuntime.awrap(user.save());

        case 21:
          token = setToken(user);
          return _context4.abrupt("return", res.status(201).json({
            message: "Success",
            token: token
          }));

        case 25:
          _context4.prev = 25;
          _context4.t0 = _context4["catch"](2);

          if (!_context4.t0.statusCode) {
            _context4.t0.statusCode = 500;
          }

          next(_context4.t0);

        case 29:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 25]]);
};

exports.resendOtp = function _callee5(req, res, next) {
  var phone, user, error, generatedOTP, smsRes, token, _error5, _error6;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log("resend otp");
          phone = parseInt(req.body.phone);
          _context5.prev = 2;
          _context5.next = 5;
          return regeneratorRuntime.awrap(User.findOne({
            phone: phone
          }));

        case 5:
          user = _context5.sent;

          if (user) {
            _context5.next = 10;
            break;
          }

          error = new Error("user not found");
          error.statusCode = 400;
          throw error;

        case 10:
          generatedOTP = generateOTP();
          _context5.next = 13;
          return regeneratorRuntime.awrap(SMS.send(user.phone, "Your MotoBar OTP is ".concat(generatedOTP)));

        case 13:
          smsRes = _context5.sent;

          if (!smsRes) {
            _context5.next = 29;
            break;
          }

          if (!(smsRes[0] && smsRes[0].type === "success")) {
            _context5.next = 24;
            break;
          }

          user.otp = generatedOTP;
          user.otpVerified = false;
          _context5.next = 20;
          return regeneratorRuntime.awrap(user.save());

        case 20:
          token = setToken(user);
          return _context5.abrupt("return", res.status(201).json({
            message: "Success",
            token: token
          }));

        case 24:
          _error5 = new Error(smsRes.error.msg);
          _error5.statusCode = 400;
          throw _error5;

        case 27:
          _context5.next = 32;
          break;

        case 29:
          _error6 = new Error("Failed to send OTP");
          _error6.statusCode = 400;
          throw _error6;

        case 32:
          _context5.next = 38;
          break;

        case 34:
          _context5.prev = 34;
          _context5.t0 = _context5["catch"](2);

          if (!_context5.t0.statusCode) {
            _context5.t0.statusCode = 500;
          }

          next(_context5.t0);

        case 38:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[2, 34]]);
};

exports.apple = function _callee6(req, res, next) {
  var email, name, fcmToken, existingAppleUser, _token, existingUser, _token2, newUser, token;

  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          // const email = req.body.email;
          email = req.body.email;
          name = req.body.name;
          fcmToken = req.body.fcmToken;
          _context6.prev = 3;
          _context6.next = 6;
          return regeneratorRuntime.awrap(User.findOne({
            "apple.email": email
          }));

        case 6:
          existingAppleUser = _context6.sent;

          if (!existingAppleUser) {
            _context6.next = 10;
            break;
          }

          _token = setToken(existingAppleUser);
          return _context6.abrupt("return", res.status(200).json({
            message: "Logged in successfully",
            admin: existingAppleUser.admin,
            owner: existingAppleUser.owner,
            token: _token
          }));

        case 10:
          _context6.next = 12;
          return regeneratorRuntime.awrap(User.findOne({
            $or: [{
              "google.email": email
            }, {
              "facebook.email": email
            }]
          }));

        case 12:
          existingUser = _context6.sent;

          if (!existingUser) {
            _context6.next = 20;
            break;
          }

          if (!existingUser.methods.includes("apple")) {
            existingUser.methods.push("apple");
          }

          existingUser.apple = {
            email: email
          };
          _context6.next = 18;
          return regeneratorRuntime.awrap(existingUser.save());

        case 18:
          _token2 = setToken(existingUser);
          return _context6.abrupt("return", res.status(200).json({
            message: "Logged in successfully",
            admin: existingUser.admin,
            owner: existingUser.owner,
            token: _token2
          }));

        case 20:
          // // // check database for the same device used
          // // if (fcmToken) {
          // //   let existingDeviceUser = await User.findOne({
          // //     fcmToken: fcmToken,
          // //   });
          // //   if (existingDeviceUser) {
          // //     existingDeviceUser.methods.push("apple");
          // //     existingDeviceUser.apple = {
          // //       email: email,
          // //     };
          // //     await existingDeviceUser.save();
          // //     const token = setToken(existingDeviceUser);
          // //     return res.status(200).json({
          // //       message: "Logged in successfully",
          // //       admin: existingDeviceUser.admin,
          // //       owner: existingDeviceUser.owner,
          // //       token: token,
          // //     });
          // //   }
          // // }
          newUser = new User({
            name: name,
            methods: ["apple"],
            apple: {
              email: email
            },
            fcmToken: fcmToken
          });
          newUser.otpVerified = false;
          _context6.next = 24;
          return regeneratorRuntime.awrap(newUser.save());

        case 24:
          token = setToken(newUser);
          return _context6.abrupt("return", res.status(200).json({
            message: "Logged in successfully",
            token: token
          }));

        case 28:
          _context6.prev = 28;
          _context6.t0 = _context6["catch"](3);

          if (!_context6.t0.statusCode) {
            _context6.t0.statusCode = 500;
          }

          next(_context6.t0);

        case 32:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[3, 28]]);
};

exports.syncApple = function _callee7(req, res, next) {
  var email, name, loggedInUser, user;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          // const email = req.body.email;
          email = req.body.email;
          name = req.body.name;
          _context7.prev = 2;
          loggedInUser = req.user;
          _context7.next = 6;
          return regeneratorRuntime.awrap(User.findById(loggedInUser._id).populate({
            path: "ownerId",
            model: "Owner",
            populate: {
              path: "store",
              model: "Store"
            }
          }).populate({
            path: "shipperId",
            model: "Shipper"
          }).populate({
            path: "leaderId",
            model: "Leader",
            populate: {
              path: "group",
              model: "Group"
            }
          }).populate({
            path: "products",
            model: "Product"
          }).populate({
            path: "orders",
            model: "Order"
          }).populate({
            path: "soldOrders",
            model: "Order"
          }));

        case 6:
          user = _context7.sent;

          if (!user.methods.includes("apple")) {
            user.methods.push("apple");
          }

          user.apple = {
            email: email
          };
          _context7.next = 11;
          return regeneratorRuntime.awrap(user.save());

        case 11:
          return _context7.abrupt("return", res.status(200).json({
            message: "Logged in successfully",
            data: user
          }));

        case 14:
          _context7.prev = 14;
          _context7.t0 = _context7["catch"](2);

          if (!_context7.t0.statusCode) {
            _context7.t0.statusCode = 500;
          }

          next(_context7.t0);

        case 18:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[2, 14]]);
};

exports.google = function _callee8(req, res, next) {
  var id, email, name, fcmToken, existingGoogleUser, _token3, existingUser, _token4, newUser, token;

  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          // const email = req.body.email;
          id = req.body.id;
          email = req.body.email;
          name = req.body.name;
          fcmToken = req.body.fcmToken;
          _context8.prev = 4;
          _context8.next = 7;
          return regeneratorRuntime.awrap(User.findOne({
            "google.id": id
          }));

        case 7:
          existingGoogleUser = _context8.sent;

          if (!existingGoogleUser) {
            _context8.next = 11;
            break;
          }

          _token3 = setToken(existingGoogleUser);
          return _context8.abrupt("return", res.status(200).json({
            message: "Logged in successfully",
            admin: existingGoogleUser.admin,
            owner: existingGoogleUser.owner,
            token: _token3
          }));

        case 11:
          _context8.next = 13;
          return regeneratorRuntime.awrap(User.findOne({
            $or: [{
              "apple.email": email
            }, {
              "facebook.email": email
            }]
          }));

        case 13:
          existingUser = _context8.sent;

          if (!existingUser) {
            _context8.next = 21;
            break;
          }

          if (!existingUser.methods.includes("google")) {
            existingUser.methods.push("google");
          }

          existingUser.google = {
            id: id,
            email: email
          };
          _context8.next = 19;
          return regeneratorRuntime.awrap(existingUser.save());

        case 19:
          _token4 = setToken(existingUser);
          return _context8.abrupt("return", res.status(200).json({
            message: "Logged in successfully",
            admin: existingUser.admin,
            owner: existingUser.owner,
            token: _token4
          }));

        case 21:
          // // if (fcmToken) {
          // //   // check database for the same device used
          // //   let existingDeviceUser = await User.findOne({
          // //     fcmToken: fcmToken,
          // //   });
          // //   if (existingDeviceUser) {
          // //     existingDeviceUser.methods.push("google");
          // //     existingDeviceUser.google = {
          // //       id: id,
          // //       email: email,
          // //     };
          // //     await existingDeviceUser.save();
          // //     const token = setToken(existingDeviceUser);
          // //     return res.status(200).json({
          // //       message: "Logged in successfully",
          // //       admin: existingDeviceUser.admin,
          // //       owner: existingDeviceUser.owner,
          // //       token: token,
          // //     });
          // //   }
          // // }
          newUser = new User({
            name: name,
            methods: ["google"],
            google: {
              id: id,
              email: email
            },
            fcmToken: fcmToken
          });
          newUser.otpVerified = false;
          _context8.next = 25;
          return regeneratorRuntime.awrap(newUser.save());

        case 25:
          token = setToken(newUser);
          return _context8.abrupt("return", res.status(200).json({
            message: "Logged in successfully",
            token: token
          }));

        case 29:
          _context8.prev = 29;
          _context8.t0 = _context8["catch"](4);

          if (!_context8.t0.statusCode) {
            _context8.t0.statusCode = 500;
          }

          next(_context8.t0);

        case 33:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[4, 29]]);
};

exports.syncGoogle = function _callee9(req, res, next) {
  var id, email, name, loggedInUser, user;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          // const email = req.body.email;
          id = req.body.id;
          email = req.body.email;
          name = req.body.name;
          _context9.prev = 3;
          loggedInUser = req.user;
          _context9.next = 7;
          return regeneratorRuntime.awrap(User.findById(loggedInUser._id).populate({
            path: "ownerId",
            model: "Owner",
            populate: {
              path: "store",
              model: "Store"
            }
          }).populate({
            path: "shipperId",
            model: "Shipper"
          }).populate({
            path: "leaderId",
            model: "Leader",
            populate: {
              path: "group",
              model: "Group"
            }
          }).populate({
            path: "products",
            model: "Product"
          }).populate({
            path: "orders",
            model: "Order"
          }).populate({
            path: "soldOrders",
            model: "Order"
          }));

        case 7:
          user = _context9.sent;

          if (!user.methods.includes("google")) {
            user.methods.push("google");
          }

          user.google = {
            id: id,
            email: email
          };
          _context9.next = 12;
          return regeneratorRuntime.awrap(user.save());

        case 12:
          return _context9.abrupt("return", res.status(200).json({
            message: "Logged in successfully",
            data: user
          }));

        case 15:
          _context9.prev = 15;
          _context9.t0 = _context9["catch"](3);

          if (!_context9.t0.statusCode) {
            _context9.t0.statusCode = 500;
          }

          next(_context9.t0);

        case 19:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[3, 15]]);
};

exports.facebook = function _callee10(req, res, next) {
  var id, email, name, image, fcmToken, existingFacebookUser, _token5, existingUser, _token6, newUser, token;

  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          // const email = req.body.email;
          id = req.body.id;
          email = req.body.email;
          name = req.body.name;
          image = req.body.image;
          fcmToken = req.body.fcmToken;
          _context10.prev = 5;
          _context10.next = 8;
          return regeneratorRuntime.awrap(User.findOne({
            "facebook.id": id
          }));

        case 8:
          existingFacebookUser = _context10.sent;

          if (!existingFacebookUser) {
            _context10.next = 15;
            break;
          }

          existingFacebookUser.image = image;
          _context10.next = 13;
          return regeneratorRuntime.awrap(existingFacebookUser.save());

        case 13:
          _token5 = setToken(existingFacebookUser);
          return _context10.abrupt("return", res.status(200).json({
            message: "Logged in successfully",
            admin: existingFacebookUser.admin,
            owner: existingFacebookUser.owner,
            token: _token5
          }));

        case 15:
          _context10.next = 17;
          return regeneratorRuntime.awrap(User.findOne({
            $or: [{
              "apple.email": email
            }, {
              "google.email": email
            }]
          }));

        case 17:
          existingUser = _context10.sent;

          if (!existingUser) {
            _context10.next = 26;
            break;
          }

          // We want to merge google's data with local auth
          if (!existingUser.methods.includes("facebook")) {
            existingUser.methods.push("facebook");
          }

          existingUser.facebook = {
            id: id,
            email: email
          };
          existingUser.image = image;
          _context10.next = 24;
          return regeneratorRuntime.awrap(existingUser.save());

        case 24:
          _token6 = setToken(existingUser);
          return _context10.abrupt("return", res.status(200).json({
            message: "Logged in successfully",
            admin: existingUser.admin,
            owner: existingUser.owner,
            token: _token6
          }));

        case 26:
          // // if (fcmToken) {
          // //   // check database for the same device used
          // //   let existingDeviceUser = await User.findOne({
          // //     fcmToken: fcmToken,
          // //   });
          // //   if (existingDeviceUser) {
          // //     existingDeviceUser.methods.push("facebook");
          // //     existingDeviceUser.facebook = {
          // //       id: id,
          // //       email: email,
          // //     };
          // //     await existingDeviceUser.save();
          // //     const token = setToken(existingDeviceUser);
          // //     return res.status(200).json({
          // //       message: "Logged in successfully",
          // //       admin: existingDeviceUser.admin,
          // //       owner: existingDeviceUser.owner,
          // //       token: token,
          // //     });
          // //   }
          // // }
          newUser = new User({
            name: name,
            image: image,
            methods: ["facebook"],
            facebook: {
              id: id,
              email: email
            },
            fcmToken: fcmToken
          });
          newUser.otpVerified = false;
          _context10.next = 30;
          return regeneratorRuntime.awrap(newUser.save());

        case 30:
          token = setToken(newUser);
          return _context10.abrupt("return", res.status(200).json({
            message: "Logged in successfully",
            token: token
          }));

        case 34:
          _context10.prev = 34;
          _context10.t0 = _context10["catch"](5);

          if (!_context10.t0.statusCode) {
            _context10.t0.statusCode = 500;
          }

          next(_context10.t0);

        case 38:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[5, 34]]);
};

exports.syncFacebook = function _callee11(req, res, next) {
  var id, email, name, image, loggedInUser, user;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          // const email = req.body.email;
          id = req.body.id;
          email = req.body.email;
          name = req.body.name;
          image = req.body.image;
          _context11.prev = 4;
          loggedInUser = req.user;
          _context11.next = 8;
          return regeneratorRuntime.awrap(User.findById(loggedInUser._id).populate({
            path: "ownerId",
            model: "Owner",
            populate: {
              path: "store",
              model: "Store"
            }
          }).populate({
            path: "shipperId",
            model: "Shipper"
          }).populate({
            path: "leaderId",
            model: "Leader",
            populate: {
              path: "group",
              model: "Group"
            }
          }).populate({
            path: "products",
            model: "Product"
          }).populate({
            path: "orders",
            model: "Order"
          }).populate({
            path: "soldOrders",
            model: "Order"
          }));

        case 8:
          user = _context11.sent;

          if (!user.methods.includes("facebook")) {
            user.methods.push("facebook");
          }

          user.facebook = {
            id: id,
            email: email
          };
          user.image = image;
          _context11.next = 14;
          return regeneratorRuntime.awrap(user.save());

        case 14:
          return _context11.abrupt("return", res.status(200).json({
            message: "Logged in successfully",
            data: user
          }));

        case 17:
          _context11.prev = 17;
          _context11.t0 = _context11["catch"](4);

          if (!_context11.t0.statusCode) {
            _context11.t0.statusCode = 500;
          }

          next(_context11.t0);

        case 21:
        case "end":
          return _context11.stop();
      }
    }
  }, null, null, [[4, 17]]);
};

exports.getProfile = function _callee12(req, res, next) {
  var authHeader, error, token, decodedToken, _error7, user, _error8;

  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          authHeader = req.get("Authorization");

          if (authHeader) {
            _context12.next = 5;
            break;
          }

          error = new Error("Not Authenticated.");
          error.statusCode = 401;
          throw error;

        case 5:
          token = authHeader.split(" ")[1];
          _context12.prev = 6;
          decodedToken = jwt.verify(token, process.env.JWT_SECRET // JWT_SECRET,
          );
          _context12.next = 14;
          break;

        case 10:
          _context12.prev = 10;
          _context12.t0 = _context12["catch"](6);
          _context12.t0.statusCode = 500;
          throw _context12.t0;

        case 14:
          if (decodedToken) {
            _context12.next = 18;
            break;
          }

          _error7 = new Error("Not Authenticated.");
          _error7.statusCode = 401;
          throw _error7;

        case 18:
          _context12.prev = 18;
          _context12.next = 21;
          return regeneratorRuntime.awrap(User.findById(decodedToken.userId).populate({
            path: "ownerId",
            model: "Owner",
            populate: {
              path: "store",
              model: "Store"
            }
          }).populate({
            path: "shipperId",
            model: "Shipper"
          }).populate({
            path: "leaderId",
            model: "Leader",
            populate: {
              path: "group",
              model: "Group"
            }
          }).populate({
            path: "products",
            model: "Product"
          }).populate({
            path: "orders",
            model: "Order"
          }).populate({
            path: "soldOrders",
            model: "Order"
          }));

        case 21:
          user = _context12.sent;

          if (user) {
            _context12.next = 26;
            break;
          }

          _error8 = new Error("Could not find user.");
          _error8.statusCode = 404;
          throw _error8;

        case 26:
          return _context12.abrupt("return", res.status(200).json({
            message: "Profile fetched.",
            data: user
          }));

        case 29:
          _context12.prev = 29;
          _context12.t1 = _context12["catch"](18);

          if (!_context12.t1.statusCode) {
            _context12.t1.statusCode = 500;
          }

          next(_context12.t1);

        case 33:
        case "end":
          return _context12.stop();
      }
    }
  }, null, null, [[6, 10], [18, 29]]);
};

exports.facebookOAuth = function _callee13(req, res, next) {
  var token;
  return regeneratorRuntime.async(function _callee13$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          token = setToken(req.user);
          return _context13.abrupt("return", res.status(201).json({
            message: "Success",
            user: req.user,
            token: token
          }));

        case 5:
          _context13.prev = 5;
          _context13.t0 = _context13["catch"](0);

          // use express to return error
          if (!_context13.t0.statusCode) {
            _context13.t0.statusCode = 500;
          }

          next(_context13.t0); // sends err to the error handling message in app.js

        case 9:
        case "end":
          return _context13.stop();
      }
    }
  }, null, null, [[0, 5]]);
};

exports.googleOAuth = function _callee14(req, res, next) {
  var token;
  return regeneratorRuntime.async(function _callee14$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          try {
            token = setToken(req.user);
            res.status(201).json({
              message: "Success",
              user: req.user,
              token: token
            });
          } catch (err) {
            // use express to return error
            if (!err.statusCode) {
              err.statusCode = 500;
            }

            next(err); // sends err to the error handling message in app.js
          }

        case 1:
        case "end":
          return _context14.stop();
      }
    }
  });
};
//# sourceMappingURL=auth.dev.js.map
