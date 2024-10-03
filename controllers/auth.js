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
  const phone = parseInt(req.body.phone);
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
  const phone = parseInt(req.body.phone);
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

    const newUser = new User({
      name: name,
      phone: phone,
      password: hashedPassword,
    });

    if (fcmToken) {
      newUser.fcmToken = fcmToken;
    }

    await newUser.save();
    const token = setToken(newUser);

    return res.status(200).json({
      message: "User created",
      token: token,
    });
  } catch (err) {
    console.log(err);

    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// exports.resetPassword = async (req, res, next) => {
//   console.log("reset password");
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
//         user.resetPassword = true;
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

// exports.verifyOtp = async (req, res, next) => {
//   const phone = parseInt(req.body.phone);
//   const otp = parseInt(req.body.otp);
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
//     console.log(user);
//     console.log(user.otp);
//     console.log(otp);
//     if (user.otp !== otp) {
//       const error = new Error("Invalid OTP");
//       error.statusCode = 400;
//       throw error;
//     }

//     user.otp = undefined;
//     user.otpVerified = true;

//     await user.save();

//     const token = setToken(user);
//     return res.status(201).json({
//       message: "Success",
//       token: token,
//     });
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

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

// exports.apple = async (req, res, next) => {
//   // const email = req.body.email;
//   const email = req.body.email;
//   const name = req.body.name;
//   const fcmToken = req.body.fcmToken;

//   try {
//     let existingAppleUser = await User.findOne({
//       "apple.email": email,
//     });
//     // check database for same apple email
//     if (existingAppleUser) {
//       const token = setToken(existingAppleUser);
//       return res.status(200).json({
//         message: "Logged in successfully",
//         admin: existingAppleUser.admin,
//         owner: existingAppleUser.owner,
//         token: token,
//       });
//     }
//     // check database for same email for other social platforms
//     const existingUser = await User.findOne({
//       $or: [{ "google.email": email }, { "facebook.email": email }],
//     });
//     if (existingUser) {
//       if (!existingUser.methods.includes("apple")) {
//         existingUser.methods.push("apple");
//       }
//       existingUser.apple = {
//         email: email,
//       };
//       await existingUser.save();
//       const token = setToken(existingUser);
//       return res.status(200).json({
//         message: "Logged in successfully",
//         admin: existingUser.admin,
//         owner: existingUser.owner,
//         token: token,
//       });
//     }
//     // // // check database for the same device used
//     // // if (fcmToken) {
//     // //   let existingDeviceUser = await User.findOne({
//     // //     fcmToken: fcmToken,
//     // //   });
//     // //   if (existingDeviceUser) {
//     // //     existingDeviceUser.methods.push("apple");
//     // //     existingDeviceUser.apple = {
//     // //       email: email,
//     // //     };
//     // //     await existingDeviceUser.save();
//     // //     const token = setToken(existingDeviceUser);
//     // //     return res.status(200).json({
//     // //       message: "Logged in successfully",
//     // //       admin: existingDeviceUser.admin,
//     // //       owner: existingDeviceUser.owner,
//     // //       token: token,
//     // //     });
//     // //   }
//     // // }
//     const newUser = new User({
//       name: name,
//       methods: ["apple"],
//       apple: {
//         email: email,
//       },
//       fcmToken: fcmToken,
//     });

//     newUser.otpVerified = false;

//     await newUser.save();
//     const token = setToken(newUser);
//     return res.status(200).json({
//       message: "Logged in successfully",
//       token: token,
//     });
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };
// exports.syncApple = async (req, res, next) => {
//   // const email = req.body.email;
//   const email = req.body.email;
//   const name = req.body.name;
//   try {
//     const loggedInUser = req.user;


//     let user = await User.findById(loggedInUser._id)
//       .populate({
//         path: "ownerId",
//         model: "Owner",
//         populate: {
//           path: "clinic",
//           model: "Clinic",
//         },
//       })
//       .populate({
//         path: "shipperId",
//         model: "Shipper",
//       })
//       .populate({
//         path: "leaderId",
//         model: "Leader",
//         populate: {
//           path: "group",
//           model: "Group",
//         },
//       })
//       .populate({
//         path: "products",
//         model: "Product",
//       })
//       .populate({
//         path: "orders",
//         model: "Order",
//       })
//       .populate({
//         path: "soldOrders",
//         model: "Order",
//       });


//     if (!user.methods.includes("apple")) {
//       user.methods.push("apple");
//     }
//     user.apple = {
//       email: email,
//     };
//     await user.save();

//     return res.status(200).json({
//       message: "Logged in successfully",
//       data: user,
//     });
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

// exports.google = async (req, res, next) => {
//   // const email = req.body.email;
//   const id = req.body.id;
//   const email = req.body.email;
//   const name = req.body.name;
//   const fcmToken = req.body.fcmToken;
//   try {
//     let existingGoogleUser = await User.findOne({
//       "google.id": id,
//     });
//     if (existingGoogleUser) {
//       const token = setToken(existingGoogleUser);
//       return res.status(200).json({
//         message: "Logged in successfully",
//         token: token,
//       });
//     }
//     // const existingUser = await User.findOne({ "facebook.email": email });
//     const existingUser = await User.findOne({
//       $or: [{ "apple.email": email }, { "facebook.email": email }],
//     });
//     if (existingUser) {
//       if (!existingUser.methods.includes("google")) {
//         existingUser.methods.push("google");
//       }
//       existingUser.google = {
//         id: id,
//         email: email,
//       };
//       await existingUser.save();
//       const token = setToken(existingUser);
//       return res.status(200).json({
//         message: "Logged in successfully",
//         admin: existingUser.admin,
//         token: token,
//       });
//     }

//     // // if (fcmToken) {
//     // //   // check database for the same device used
//     // //   let existingDeviceUser = await User.findOne({
//     // //     fcmToken: fcmToken,
//     // //   });
//     // //   if (existingDeviceUser) {
//     // //     existingDeviceUser.methods.push("google");
//     // //     existingDeviceUser.google = {
//     // //       id: id,
//     // //       email: email,
//     // //     };
//     // //     await existingDeviceUser.save();
//     // //     const token = setToken(existingDeviceUser);
//     // //     return res.status(200).json({
//     // //       message: "Logged in successfully",
//     // //       admin: existingDeviceUser.admin,
//     // //       owner: existingDeviceUser.owner,
//     // //       token: token,
//     // //     });
//     // //   }
//     // // }

//     const newUser = new User({
//       name: name,
//       methods: ["google"],
//       google: {
//         id: id,
//         email: email,
//       },
//       fcmToken: fcmToken,
//     });

//     newUser.otpVerified = false;

//     await newUser.save();
//     const token = setToken(newUser);
//     return res.status(200).json({
//       message: "Logged in successfully",
//       token: token,
//     });

//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     console.log(err)
//     next(err);
//   }
// };
// exports.syncGoogle = async (req, res, next) => {
//   // const email = req.body.email;
//   const id = req.body.id;
//   const email = req.body.email;
//   const name = req.body.name;
//   try {
//     const loggedInUser = req.user;



//     let user = await User.findById(loggedInUser._id)
//       .populate({
//         path: "ownerId",
//         model: "Owner",
//         populate: {
//           path: "clinic",
//           model: "Clinic",
//         },
//       })
//       .populate({
//         path: "shipperId",
//         model: "Shipper",
//       })
//       .populate({
//         path: "leaderId",
//         model: "Leader",
//         populate: {
//           path: "group",
//           model: "Group",
//         },
//       })
//       .populate({
//         path: "products",
//         model: "Product",
//       })
//       .populate({
//         path: "orders",
//         model: "Order",
//       })
//       .populate({
//         path: "soldOrders",
//         model: "Order",
//       });


//     if (!user.methods.includes("google")) {
//       user.methods.push("google");
//     }
//     user.google = {
//       id: id,
//       email: email,
//     };
//     await user.save();


//     return res.status(200).json({
//       message: "Logged in successfully",
//       data: user,
//     });
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

// exports.facebook = async (req, res, next) => {
//   // const email = req.body.email;
//   const id = req.body.id;
//   const email = req.body.email;
//   const name = req.body.name;
//   const image = req.body.image;
//   const fcmToken = req.body.fcmToken;
//   try {
//     let existingFacebookUser = await User.findOne({
//       "facebook.id": id,
//     });
//     if (existingFacebookUser) {
//       existingFacebookUser.image = image;
//       await existingFacebookUser.save();
//       const token = setToken(existingFacebookUser);

//       return res.status(200).json({
//         message: "Logged in successfully",
//         admin: existingFacebookUser.admin,
//         owner: existingFacebookUser.owner,
//         token: token,
//       });
//     }
//     // const existingUser = await User.findOne({ "facebook.email": email });
//     const existingUser = await User.findOne({
//       $or: [{ "apple.email": email }, { "google.email": email }],
//     });
//     if (existingUser) {
//       // We want to merge google's data with local auth
//       if (!existingUser.methods.includes("facebook")) {

//         existingUser.methods.push("facebook");
//       }
//       existingUser.facebook = {
//         id: id,
//         email: email,
//       };
//       existingUser.image = image;
//       await existingUser.save();
//       const token = setToken(existingUser);
//       return res.status(200).json({
//         message: "Logged in successfully",
//         admin: existingUser.admin,
//         owner: existingUser.owner,
//         token: token,
//       });
//     }

//     // // if (fcmToken) {
//     // //   // check database for the same device used
//     // //   let existingDeviceUser = await User.findOne({
//     // //     fcmToken: fcmToken,
//     // //   });
//     // //   if (existingDeviceUser) {
//     // //     existingDeviceUser.methods.push("facebook");
//     // //     existingDeviceUser.facebook = {
//     // //       id: id,
//     // //       email: email,
//     // //     };
//     // //     await existingDeviceUser.save();
//     // //     const token = setToken(existingDeviceUser);
//     // //     return res.status(200).json({
//     // //       message: "Logged in successfully",
//     // //       admin: existingDeviceUser.admin,
//     // //       owner: existingDeviceUser.owner,
//     // //       token: token,
//     // //     });
//     // //   }
//     // // }

//     const newUser = new User({
//       name: name,
//       image: image,
//       methods: ["facebook"],
//       facebook: {
//         id: id,
//         email: email,
//       },
//       fcmToken: fcmToken,
//     });

//     newUser.otpVerified = false;

//     await newUser.save();
//     const token = setToken(newUser);
//     return res.status(200).json({
//       message: "Logged in successfully",
//       token: token,
//     });
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };
// exports.syncFacebook = async (req, res, next) => {
//   // const email = req.body.email;
//   const id = req.body.id;
//   const email = req.body.email;
//   const name = req.body.name;
//   const image = req.body.image;
//   try {
//     const loggedInUser = req.user;




//     let user = await User.findById(loggedInUser._id);

//     if (!user.methods.includes("facebook")) {
//       user.methods.push("facebook");
//     }
//     user.facebook = {
//       id: id,
//       email: email,
//     };
//     user.image = image;
//     await user.save();


//     return res.status(200).json({
//       message: "Logged in successfully",
//       data: user,
//     });
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
    decodedToken = jwt.verify(token,
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
      }).populate({
        path: "pocket.child",
        model: "User",
      }).populate({
        path: "pocket.parent",
        model: "User",
      }).populate({
        path: "tests",
        model: "Test",
        populate: [{
          path: 'createdBy',
          model: 'User',
        }, {
          path: 'parent',
          model: 'User',
        }],
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