const twilio = require("twilio");
const SMS = require("../startup/sms_send");
require("dotenv/config");

const { JWT_SECRET } = require("../config/index");
const bcrypt = require("bcryptjs");
const cookie = require("cookie");

const jwt = require("jsonwebtoken");

const User = require("../models/stackholders/user");

setToken = (user) => {
  return jwt.sign(
    {
      iat: new Date().getTime(),
      userId: user._id.toString(),
    },
    process.env.JWT_SECRET
    // JWT_SECRET
    // { expiresIn: "1h" }
  );
};

generateOTP = () => {
  // Declare a digits variable
  // which clinics all digits
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

exports.login = async (req, res, next) => {
  const phone = parseInt("20" + req.body.phone);
  // const phone = parseInt(req.body.phone); // flutter
  const password = req.body.password;
  const fcmToken = req.body.fcmToken;

  try {
    const user = await User.findOne({ phone: phone });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      return res.status(400).json({
        message: "Wrong password",
      });
    }

    if (!fcmToken && !user.fcmToken) {
      user.fcmToken = undefined;
    } else if (fcmToken) {
      user.fcmToken = fcmToken;
    }

    await user.save();
    const token = setToken(user);

    return res.status(200).json({
      message: "Logged in successfully",
      token: token,
      otpVerified: user.otpVerified,
      otp: user.otp,
    });
  } catch (err) {
    console.log(err);

    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.signup = async (req, res, next) => {
  const name = req.body.name;
  const phone = parseInt("20" + req.body.phone);
  const password = req.body.password;
  const fcmToken = req.body.fcmToken;

  try {
    const user = await User.findOne({ phone: phone });

    if (user) {
      return res.status(400).json({
        message: "User already exist",
      });
    }

    hashedPassword = await bcrypt.hash(password, 12);

    let generatedOTP = generateOTP();

    const newUser = new User({
      name: name,
      phone: phone,
      password: hashedPassword,
      otpVerified: false,
      otp: generatedOTP,
    });

    await twilioAPI(
      phone,
      `Your verification code is ${generatedOTP}`
    );
    if (fcmToken) {
      newUser.fcmToken = fcmToken;
    }

    await newUser.save();
    const token = setToken(newUser);

    return res.status(200).json({
      message: "User created",
      token: token,
      otpVerified: newUser.otpVerified,
      otp: newUser.otp,
    });
  } catch (err) {
    console.log(err);

    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.forgetPassword = async (req, res, next) => {
  console.log("reset password");
  const phone = parseInt("2" + req.body.phone);
  try {
    console.log(phone);

    // check if user logged in with phone or local email
    let user = await User.findOne({
      phone: phone,
    });
    if (!user) {
      const error = new Error("user not found");
      error.statusCode = 400;
      throw error;
    }

    let generatedOTP = generateOTP();

    await twilioAPI(
      phone,
      `Your verification code is ${generatedOTP}`
    );

    console.log("twilioRes");
    user.otp = generatedOTP;
    user.otpVerified = false;
    user.resetPassword = true;
    await user.save();
    const token = setToken(user);
    return res.status(201).json({
      message: "Success",
      token: token,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// exports.resendOtp = async (req, res, next) => {
//   console.log("resend otp");
//   const phone = parseInt(req.body.phone);
//   try {
//     // check if user logged in with phone or local email
//     let user = await User.findOne({
//       phone: phone,
//     });
//     if (!user) {
//       const error = new Error("user not found");
//       error.statusCode = 400;
//       throw error;
//     }

//     let generatedOTP = generateOTP();

//     let smsRes = await SMS.send(
//       user.phone,
//       `Your MotoBar OTP is ${generatedOTP}`
//     );

//     if (smsRes) {
//       if (smsRes[0] && smsRes[0].type === "success") {
//         user.otp = generatedOTP;
//         user.otpVerified = false;
//         await user.save();
//         const token = setToken(user);
//         return res.status(201).json({
//           message: "Success",
//           token: token,
//         });
//       } else {
//         const error = new Error(smsRes.error.msg);
//         error.statusCode = 400;
//         throw error;
//       }
//     } else {
//       const error = new Error("Failed to send OTP");
//       error.statusCode = 400;
//       throw error;
//     }
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

exports.getProfile = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("Not Authenticated.");
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET
      // JWT_SECRET,
    );

    if (!decodedToken) {
      const error = new Error("Not Authenticated.");
      error.statusCode = 401;
      throw error;
    }

    let user = await User.findById(decodedToken.userId)
      .populate({
        path: "children.user",
        model: "User",
      })
      .populate({
        path: "pocket.child",
        model: "User",
      })
      .populate({
        path: "pocket.parent",
        model: "User",
      })
      .populate({
        path: "tests",
        model: "Test",
        populate: [
          {
            path: "createdBy",
            model: "User",
          },
          {
            path: "parent",
            model: "User",
          },
        ],
      });

    if (!user) {
      const error = new Error("Could not find user.");
      error.statusCode = 404;
      throw error;
    }

    return res.status(200).json({ message: "Profile fetched.", data: user });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

generateOTP = () => {
  // Declare a digits variable
  // which stores all digits
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};
exports.verifyOtp = async (req, res, next) => {
  const phone = parseInt("2" + req.body.phone);
  const otp = parseInt(req.body.otp);
  try {
    let user = await User.findOne({
      phone: phone,
    });
    if (!user) {
      const error = new Error("user not found");
      error.statusCode = 404;
      throw error;
    }

    if (user.otp !== otp) {
      const error = new Error("Invalid OTP");
      error.statusCode = 400;
      throw error;
    }

    user.otp = undefined;
    user.otpVerified = true;

    await user.save();

    const token = setToken(user);
    return res.status(201).json({
      message: "Success",
      token: token,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

twilioAPI = async (phone, msg) => {
  // Download the helper library from https://www.twilio.com/docs/node/install

  // Find your Account SID and Auth Token at twilio.com/console
  // and set the environment variables. See http://twil.io/secure
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);
  // async function createMessage() {
  try {
    await client.messages
      .create({
        body: msg,
        to: `+${phone}`,
        from: "+15202177179",
      })
      .then((response) => {
        console.log("response");
        return response.body;
      }) // Log the entire response
      .catch((error) => {
        console.error(error);
        const err = new Error(error.message);
        err.statusCode = 400;
        throw err;
      });

    // const message = await client.messages.create({
    //   body: msg,
    //   from: "whatsapp:+15202177179",
    //   to: `whatsapp:+${phone}`,
    // });

    // // const message = await client.messages.create({
    // //   body: msg,
    // //   from: "+15202177179",
    // //   to: `+${phone}`,
    // // });

    // console.log(message.body);
  } catch (error) {
    const err = new Error(error.message);
    err.statusCode = 400;
    throw err;
  }
  // }

  // await createMessage();
};

exports.sendOtp = async (req, res, next) => {
  console.log("send otp");
  const phone = parseInt(req.body.phone);
  try {
    // check if user logged in with phone or local email
    let user = await User.findOne({
      phone: phone,
    });
    if (!user) {
      const error = new Error("user not found");
      error.statusCode = 400;
      throw error;
    }

    let generatedOTP = generateOTP();

    let twilioRes = await twilioAPI(
      phone,
      `Your verification code is ${generatedOTP}`
    );

    if (twilioRes) {
      console.log("twilioRes");
      console.log(twilioRes);
      user.otp = generatedOTP;
      user.otpVerified = false;
      await user.save();
      const token = setToken(user);
      return res.status(201).json({
        message: "Success",
        token: token,
      });
    } else {
      const error = new Error("Failed to send OTP");
      error.statusCode = 400;
      throw error;
    }
  } catch (err) {
    console.log(err);

    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


exports.newPassword = async (req, res, next) => {
  const phone = parseInt("2" + req.body.phone);
  const password = req.body.password;
  const otp = parseInt(req.body.otp);
  
  try {
    let user = await User.findOne({
      phone: phone,
    });
    if (!user) {
      const error = new Error("user not found");
      error.statusCode = 404;
      throw error;
    }

    if (user.otp !== otp) {
      const error = new Error("Invalid OTP");
      error.statusCode = 400;
      throw error;
    }

    hashedPassword = await bcrypt.hash(password, 12);

    user.password = hashedPassword;
    user.otp = undefined;
    user.resetPassword = undefined;
    user.otpVerified = true;

    await user.save();

    const token = setToken(user);
    return res.status(201).json({
      message: "Success",
      token: token,
    });
  } catch (err) {
    console.log(err)
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};