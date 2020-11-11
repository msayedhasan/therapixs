const User = require("../../models/stackholders/user");
const Product = require("../../models/product");
const Store = require("../../models/store");

exports.getAll = async (req, res, next) => {
  try {
    const users = await User.find({ admin: undefined }).select(
      "name phone locked admin owner shipper leader dob"
    );

    return res.status(200).json({
      message: "Success",
      data: users,
    });
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
    const location = req.body.location;

    user.name = name;
    user.phone = phone;
    if (image == null) {
      user.image = undefined;
    } else {
      user.image = image;
    }
    if (dob == null) {
      user.dob = undefined;
    } else {
      user.dob = dob;
    }
    if (location == null) {
      user.address = undefined;
      user.location = undefined;
    } else {
      user.location = location;
      user.address = address;
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
