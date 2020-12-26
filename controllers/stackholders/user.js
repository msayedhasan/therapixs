const User = require("../../models/stackholders/user");
const Product = require("../../models/product");
const Store = require("../../models/store");
const bcrypt = require("bcryptjs");

exports.getAll = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      const users = await User.find({ admin: undefined }).select(
        "name phone locked admin owner shipper leader dob address fcmToken bikeMake bikeYear"
      );

      return res.status(200).json({
        message: "Success",
        data: users,
      });
    } else {
      const error = new Error("Not authorized.");
      error.statusCode = 404;
      throw error;
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    if (!user) {
      const error = new Error("Could not find user.");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({ message: "Success", data: user });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getOneByPhone = async (req, res, next) => {
  const phone = req.body.phone;
  try {
    const user = await User.findOne({ phone: phone });
    if (!user) {
      const error = new Error("Could not find user.");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({ message: "Success", data: user });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    user = req.user;
    // update user data
    const name = req.body.name;
    const image = req.body.image;
    const phone = req.body.phone;
    const dob = req.body.dob;
    const address = req.body.address;
    const password = req.body.password; // complete profile
    const location = req.body.location;
    const bikeModel = req.body.bikeModel;
    const bikeBrand = req.body.bikeBrand;
    const bikeMake = req.body.bikeMake;
    const bikeYear = req.body.bikeYear;
    const allowNotification = req.body.allowNotification;
    const fcmToken = req.body.fcmToken;

    if (!name && !user.name) {
      user.name = undefined;
    } else if (name) {
      user.name = name;
    }
    if (password) {
      user.local.password = await bcrypt.hash(password, 12);
      user.resetPassword = undefined;
    }
    if (!phone && !user.phone) {
      user.phone = undefined;
    } else if (phone) {
      user.phone = parseInt(phone);
    }
    if (!bikeModel && !user.bikeModel) {
      user.bikeModel = undefined;
    } else if (bikeModel) {
      user.bikeModel = bikeModel;
    }
    if (!bikeYear && !user.bikeYear) {
      user.bikeYear = undefined;
    } else if (bikeYear) {
      user.bikeYear = bikeYear;
    }
    if (!bikeBrand && !user.bikeBrand) {
      user.bikeBrand = undefined;
    } else if (bikeBrand) {
      user.bikeBrand = bikeBrand;
    }
    if (!bikeMake && !user.bikeMake) {
      user.bikeMake = undefined;
    } else if (bikeMake) {
      user.bikeMake = bikeMake;
    }
    if (!allowNotification && !user.allowNotification) {
      user.allowNotification = undefined;
    } else if (allowNotification) {
      user.allowNotification = allowNotification;
    }
    if (!image && !user.image) {
      user.image = undefined;
    } else if (image) {
      user.image = image;
    }
    if (!address && !user.address) {
      user.address = undefined;
    } else if (address) {
      user.address = address;
    }
    if (!dob && !user.dob) {
      user.dob = undefined;
    } else if (dob) {
      user.dob = dob;
    }
    if (!location && !user.location) {
      user.location = undefined;
    } else if (location) {
      user.location = location;
    }
    if (!fcmToken && !user.fcmToken) {
      user.fcmToken = undefined;
    } else if (fcmToken && fcmToken !== "") {
      user.fcmToken = fcmToken;
    }
    await user.save();
    return res.status(200).json({ message: "Success", data: user });
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.lockOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    const userId = req.params.userId;
    if (loggedInUser.admin) {
      const user = await User.findById(userId);
      if (!user) {
        const error = new Error("Could not find user.");
        error.statusCode = 404;
        throw error;
      }

      if (user.locked) {
        const error = new Error("user is already locked.");
        error.statusCode = 404;
        throw error;
      }

      user.locked = true;
      await user.save();

      return res.status(200).json({ message: "User locked!" });
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
    const userId = req.params.userId;
    if (loggedInUser.admin) {
      const user = await User.findById(userId);
      if (!user) {
        const error = new Error("Could not find user.");
        error.statusCode = 404;
        throw error;
      }

      if (!user.locked) {
        const error = new Error("user is already unlocked.");
        error.statusCode = 404;
        throw error;
      }

      user.locked = false;
      await user.save();

      return res.status(200).json({ message: "User unlocked!" });
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
