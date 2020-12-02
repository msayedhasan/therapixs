const Product = require("../models/product");
const Ad = require("../models/ad");
const Owner = require("../models/stackholders/owner");
const User = require("../models/stackholders/user");

const awsDelete = require("../startup/aws-s3-delete");

exports.getAll = async(req, res, next) => {
    try {
        const ads = await Ad.find();

        return res.status(200).json({
            message: "Success",
            data: ads,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getOne = async(req, res, next) => {
    const adId = req.params.adId;
    try {
        const ad = await Ad.findById(adId);
        if (!ad) {
            const error = new Error("Could not find ad.");
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: "Success", data: ad });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.addOne = async(req, res, next) => {
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
            const name = JSON.parse(req.body.name);

            const existedAd = await Ad.findOne({ name: name });
            if (existedAd) {
                await awsDelete.delete(image);

                const error = new Error("Ad with this name is already exists");
                error.statusCode = 400;
                throw error;
            }

            const ad = new Ad({
                name: name,
                image: image,
                creator: loggedInUser._id,
                createdAt: Date.now(),
            });
            await ad.save();

            return res.status(201).json({
                message: "Ad added successfully!",
                data: ad,
            });
        } else {
            await awsDelete.delete(image);

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

exports.updateOne = async(req, res, next) => {
    try {
        // upload image if exist
        let image = "";
        if (req.file) {
            image = req.file.location;
        } else {
            image = ad.image;
        }
        const loggedInUser = req.user;
        if (loggedInUser.admin) {
            const adId = req.params.adId;
            const ad = await Ad.findById(adId);

            if (!ad) {
                const error = new Error("Could not find ad.");
                error.statusCode = 404;
                throw error;
            }

            const name = JSON.parse(req.body.name);

            const oldAd = await Ad.findOne({ name: name });
            if (oldAd && !oldAd._id.equals(adId)) {
                if (req.file) {
                    await awsDelete.delete(req.file.location);
                }
                const error = new Error("Ad with this name is already exist");
                error.statusCode = 400;
                throw error;
            }

            ad.name = name;
            ad.image = image;
            await ad.save();

            return res.status(201).json({
                message: "Ad updated successfully!",
                data: ad,
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
            await awsDelete.delete(req.file.location);
        }
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.deleteOne = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        const adId = req.params.adId;
        if (loggedInUser.admin) {
            const ad = await Ad.findById(adId);
            if (!ad) {
                const error = new Error("Could not find ad.");
                error.statusCode = 404;
                throw error;
            }

            await awsDelete.delete(ad.image);
            await Ad.findByIdAndDelete(adId);
            return res.status(200).json({ message: "Ad deleted!" });
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