const Feed = require("../models/feed");

exports.getAll = async (req, res, next) => {
  try {
    let feeds = await Feed.find();
    return res.status(200).json({
      message: "Fetched successfully",
      data: feeds,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  const feedId = req.params.feedId;
  try {
    const feed = await Feed.findById(feedId);
    if (!feed) {
      const error = new Error("Could not find feed.");
      error.statusCode = 404;
      throw error;
    }
    return res.status(200).json({
      message: "fetched successfully",
      data: feed,
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
    if (!loggedInUser.admin) {
      const error = new Error("Not authorized as you're not an admin!");
      error.statusCode = 403;
      throw error;
    }

    const nameEn = JSON.parse(req.body.name).en;
    const nameAr = JSON.parse(req.body.name).ar;
    const descriptionEn = JSON.parse(req.body.description).en;
    const descriptionAr = JSON.parse(req.body.description).ar;

    const imageFile = req.file;

    if (!imageFile) {
      return res.status(422).json({ message: "Attached file is not an image" });
    }

    const image = imageFile.path;

    const feed = new Feed({
      image: image,
      name: {
        en: nameEn,
        ar: nameAr,
      },
      description: {
        en: descriptionEn,
        ar: descriptionAr,
      },
      creator: loggedInUser._id,
      createdAt: Date.now(),
    });

    await feed.save();

    return res.status(201).json({
      message: "Feed attribute added successfully!",
      feed: feed,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (!loggedInUser.admin) {
      const error = new Error("Not authorized as you're not an admin!");
      error.statusCode = 403;
      throw error;
    }

    const nameEn = JSON.parse(req.body.name).en;
    const nameAr = JSON.parse(req.body.name).ar;
    const descriptionEn = JSON.parse(req.body.description).en;
    const descriptionAr = JSON.parse(req.body.description).ar;

    const feedId = req.params.feedId;

    const feed = await Feed.findById(feedId);

    if (!feed) {
      const error = new Error("Could not find feed.");
      error.statusCode = 404;
      throw error;
    }
    if (imageFile) {
      category.image = imageFile.path;
    }
    feed.name.en = nameEn;
    feed.name.ar = nameAr;
    feed.description.en = descriptionEn;
    feed.description.ar = descriptionAr;
    await feed.save();

    return res
      .status(200)
      .json({ message: "Feed attribute updated!", data: feed });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteOne = async (req, res, next) => {
  const feedId = req.params.feedId;
  try {
    await Feed.findByIdAndDelete(feedId);

    return res.status(200).json({ message: "Feed deleted!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
