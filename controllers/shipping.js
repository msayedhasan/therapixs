const Shipping = require("../models/shipping");

exports.getAll = async(req, res, next) => {
    try {
        const shippings = await Shipping.find();

        return res.status(200).json({
            message: "Success",
            data: shippings,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getOne = async(req, res, next) => {
    const shippingId = req.params.shippingId;
    try {
        const shipping = await Shipping.findById(shippingId);
        if (!shipping) {
            const error = new Error("Could not find shipping.");
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: "Success", data: shipping });
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
            const from = req.body.from;
            const to = req.body.to;
            const cost = req.body.cost;

            const shipping = new Shipping({
                from: from,
                to: to,
                cost: cost,
                creator: loggedInUser._id,
                createdAt: Date.now(),
            });
            await shipping.save();

            return res.status(201).json({
                message: "Shipping added successfully!",
                data: shipping,
            });
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

exports.deleteOne = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        if (loggedInUser.admin) {
            const shippingId = req.params.shippingId;
            const shipping = await Shipping.findById(shippingId);
            if (!shipping) {
                const error = new Error("Could not find shipping.");
                error.statusCode = 404;
                throw error;
            }

            await Shipping.findByIdAndDelete(shippingId);
            return res.status(200).json({ message: "Shipping deleted!" });
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

exports.getCost = async(req, res, next) => {
    try {
        const from = req.params.from;
        const to = req.params.to;

        const shipping = await Shipping.findOne({
            $and: [{ from: from }, { to: to }],
        });
        if (!shipping) {
            const error = new Error("Could not find shipping.");
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: "Success", data: shipping });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};