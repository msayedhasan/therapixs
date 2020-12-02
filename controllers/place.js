const Place = require("../models/place");

exports.getAll = async(req, res, next) => {
    try {
        const places = await Place.find();

        return res.status(200).json({
            message: "Success",
            data: places,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getOne = async(req, res, next) => {
    const placeId = req.params.placeId;
    try {
        const place = await Place.findById(placeId);
        if (!place) {
            const error = new Error("Could not find place.");
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: "Success", data: place });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.addOne = async(req, res, next) => {
    try {
        const loggedInUser = req.user;

        if (loggedInUser.admin) {
            const name = req.body.name;

            const existedPlace = await Place.findOne({ name: name });
            if (existedPlace) {
                const error = new Error("Place with this name is already exists");
                error.statusCode = 400;
                throw error;
            }

            const place = new Place({
                name: name,
                creator: loggedInUser._id,
                createdAt: Date.now(),
            });
            await place.save();

            return res.status(201).json({
                message: "Place added successfully!",
                data: place,
            });
        } else {
            const error = new Error("Not authorized as you're not an owner!");
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
        const loggedInUser = req.user;

        if (loggedInUser.admin) {
            const placeId = req.params.placeId;
            const place = await Place.findById(placeId);

            if (!place) {
                const error = new Error("Could not find place.");
                error.statusCode = 404;
                throw error;
            }

            const name = req.body.name;

            const oldPlace = await Place.findOne({ name: name });
            if (oldPlace) {
                const error = new Error("Place with this name is already exist");
                error.statusCode = 400;
                throw error;
            }

            place.name = name;
            await place.save();

            return res.status(201).json({
                message: "Place updated successfully!",
                data: place,
            });
        } else {
            const error = new Error("Not authorized as you're not an owner!");
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

exports.deleteOne = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        const placeId = req.params.placeId;
        if (loggedInUser.admin) {
            const place = await Place.findById(placeId);
            if (!place) {
                const error = new Error("Could not find place.");
                error.statusCode = 404;
                throw error;
            }

            await Place.findByIdAndDelete(placeId);
            return res.status(200).json({ message: "Place deleted!" });
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