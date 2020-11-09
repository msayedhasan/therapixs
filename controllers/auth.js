const { JWT_SECRET } = require("../config/index");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/stackholders/user");

setToken = (user) => {
  return jwt.sign(
    {
      iat: new Date().getTime(),
      userId: user._id.toString(),
    },
    JWT_SECRET
    // { expiresIn: "1h" }
  );
};

exports.signup = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;
  const fcmToken = req.body.fcmToken;
  hashedPassword = await bcrypt.hash(password, 12);

  try {
    // check if user logged in with phone or local email
    let user = await User.findOne({
      $or: [{ phone: phone }, { "local.email": email }],
    });
    if (user) {
      const error = new Error("user existed");
      error.statusCode = 401;
      throw error;
    }

    // check if user logged in with existing mail via facebook or google
    let socialMediaUser = await User.findOne({
      $or: [{ "google.email": email }, { "facebook.email": email }],
    });
    if (socialMediaUser) {
      socialMediaUser.phone = phone;
      socialMediaUser.methods.push("local");
      socialMediaUser.local = {
        email: email,
        password: hashedPassword,
      };
      await socialMediaUser.save();

      const token = setToken(socialMediaUser);
      return res.status(201).json({
        message: "Success",
        token: token,
      });
    }

    const newUser = new User({
      name: name,
      phone: phone,
      methods: ["local"],
      local: {
        email: email,
        password: hashedPassword,
      },
      fcmToken: fcmToken,
    });

    await newUser.save();

    const token = setToken(newUser);
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

exports.login = async (req, res, next) => {
  // const email = req.body.email;
  const phone = req.body.phone;
  const password = req.body.password;
  try {
    const user = await User.findOne({ phone: phone });
    if (!user) {
      const error = new Error("user not found");
      error.statusCode = 401;
      throw error;
    }
    // const user = await User.findOne({ "local.email": email });
    // if (!user) {
    //   const error = new Error("user not found");
    //   error.statusCode = 401;
    //   throw error;
    // }
    isEqual = await bcrypt.compare(password, user.local.password);
    if (!isEqual) {
      const error = new Error("Wrong password");
      error.statusCode = 401;
      throw error;
    }

    const token = setToken(user);
    return res.status(200).json({
      message: "Logged in successfully",
      admin: user.admin,
      owner: user.owner,
      token: token,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

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
    decodedToken = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    const error = new Error("Not Authenticated.");
    error.statusCode = 401;
    throw error;
  }
  try {
    let user = await User.findById(decodedToken.userId);
    if (!user) {
      const error = new Error("Could not find user.");
      error.statusCode = 404;
      throw error;
    }
    if (user.owner) {
      user = await User.findById(user._id).populate({
        path: "ownerId",
        model: "Owner",
        populate: {
          path: "store",
          model: "Store",
        },
      });
      return res.status(200).json({ message: "Profile fetched.", data: user });
    } else if (user.manager) {
      user = await User.findById(user._id).populate({
        path: "managerId",
        model: "Manager",
        populate: {
          path: "branch",
          model: "Branch",
        },
      });
      return res.status(200).json({ message: "Profile fetched.", data: user });
    } else if (user.sales) {
      user = await User.findById(user._id).populate({
        path: "salesId",
        model: "Sales",
      });
      return res.status(200).json({ message: "Profile fetched.", data: user });
    }
    return res.status(200).json({ message: "Profile fetched.", data: user });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
