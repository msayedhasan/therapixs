const Slider = require("../models/slider");
const User = require("../models/stackholders/user");

const awsDelete = require("../startup/aws-s3-delete");

exports.getAll = async (req, res, next) => {
  try {
    const sliders = await Slider.find();

    return res.status(200).json({
      message: "Success",
      data: sliders,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  const sliderId = req.params.sliderId;
  try {
    const slider = await Slider.findById(sliderId);
    if (!slider) {
      const error = new Error("Could not find slider.");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({ message: "Success", data: slider });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addOne = async (req, res, next) => {
  try {
    // upload image if exist
    let image = "";
    if (req.file) {
      image = req.file.location;
    } else {
      return res.status(422).json({ message: "Image is required" });
    }

    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      const slider = new Slider({
        image: image,
        creator: loggedInUser._id,
        createdAt: Date.now(),
      });
      await slider.save();

      return res.status(201).json({
        message: "Slider added successfully!",
        data: slider,
      });
    } else {
      await awsDelete.delete(image);

      const error = new Error("Not authorized as you're not an admin!");
      error.statusCode = 403;
      throw error;
    }
  } catch (err) {
    if (req.file) {
      awsDelete.delete(req.file.location);
    }
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    // upload image if exist
    let image = "";
    if (req.file) {
      image = req.file.location;
    } else {
      image = slider.image;
    }
    const loggedInUser = req.user;
    if (loggedInUser.admin) {
      const sliderId = req.params.sliderId;
      const slider = await Slider.findById(sliderId);

      if (!slider) {
        const error = new Error("Could not find slider.");
        error.statusCode = 404;
        throw error;
      }

      slider.image = image;
      await slider.save();

      return res.status(201).json({
        message: "Slider updated successfully!",
        data: slider,
      });
    } else {
      if (req.file) {
        await awsDelete.delete(req.file.location);
      }
      const error = new Error("Not authorized as you're not an admin!");
      error.statusCode = 403;
      throw error;
    }
  } catch (err) {
    if (req.file) {
      awsDelete.delete(req.file.location);
    }
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    const sliderId = req.params.sliderId;
    if (loggedInUser.admin) {
      const slider = await Slider.findById(sliderId);
      if (!slider) {
        const error = new Error("Could not find slider.");
        error.statusCode = 404;
        throw error;
      }

      await awsDelete.delete(slider.image);
      await Slider.findByIdAndDelete(sliderId);
      return res.status(200).json({ message: "Slider deleted!" });
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
