const Shipper = require("../../models/stackholders/shipper");
const User = require("../../models/stackholders/user");

exports.getAll = async(req, res, next) => {
    try {
        const shippers = await User.find({
            shipperId: { $exists: true },
        }).populate({
            path: "shipperId",
            model: "Shipper",
        });

        return res.status(200).json({
            message: "Success",
            data: shippers,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getOne = async(req, res, next) => {
    const shipperId = req.params.shipperId;
    try {
        const shipper = await Shipper.findById(shipperId);
        if (!shipper) {
            const error = new Error("Could not find shipper.");
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: "Success", data: shipper });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.addShipper = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        if (loggedInUser.admin) {
            const userId = req.params.userId;
            const user = await User.findById(userId);

            if (!user) {
                const error = new Error("Could not find user.");
                error.statusCode = 404;
                throw error;
            }

            if (user.admin) {
                const error = new Error("This user is an admin.");
                error.statusCode = 400;
                throw error;
            }
            if (user.shipper) {
                const error = new Error("This user is already a shipper.");
                error.statusCode = 400;
                throw error;
            }

            const oldShipper = await Shipper.findOne({ user: userId });
            if (oldShipper) {
                user.shipper = true;
                user.shipperId = oldShipper._id;
                await user.save();

                return res.status(201).json({
                    message: "Shipper updated old shipper successfully!",
                    data: oldShipper,
                });
            }

            const shipper = new Shipper({
                user: user._id,
            });

            await shipper.save();

            user.shipper = true;
            user.shipperId = shipper._id;
            await user.save();

            return res.status(201).json({
                message: "Shipper added successfully!",
                data: user,
            });
        } else {
            const error = new Error("Not authorized as you're not an Admin!");
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

exports.deleteShipper = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        if (loggedInUser.admin) {
            const userId = req.params.userId;
            const user = await User.findById(userId);

            if (!user.shipper) {
                const error = new Error("This user is not an shipper.");
                error.statusCode = 400;
                throw error;
            }

            const shipper = await Shipper.findById(user.shipperId);
            if (!shipper) {
                const error = new Error("couldn't find this shipper.");
                error.statusCode = 400;
                throw error;
            }

            user.shipper = undefined;
            user.shipperId = undefined;

            await user.save();

            return res.status(201).json({
                message: "Shippership deleted successfully!",
                data: user,
            });
        } else {
            const error = new Error("Not authorized as you're not an Admin!");
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

exports.lockShipper = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        if (loggedInUser.admin) {
            const shipperId = req.params.shipperId;
            const shipper = await Shipper.findById(shipperId);

            if (shipper.locked) {
                const error = new Error("This shipper is already locked.");
                error.statusCode = 400;
                throw error;
            }

            shipper.locked = true;

            await shipper.save();

            return res.status(201).json({
                message: "Shipper locked successfully!",
                data: shipper,
            });
        } else {
            const error = new Error("Not authorized!");
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

exports.unlockShipper = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        if (loggedInUser.admin) {
            const shipperId = req.params.shipperId;
            const shipper = await Shipper.findById(shipperId);

            if (!shipper.locked) {
                const error = new Error("This shipper is already unlocked.");
                error.statusCode = 400;
                throw error;
            }

            shipper.locked = false;

            await shipper.save();

            return res.status(201).json({
                message: "Shipper unlocked successfully!",
                data: shipper,
            });
        } else {
            const error = new Error("Not authorized!");
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