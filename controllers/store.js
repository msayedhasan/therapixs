const Product = require("../models/product");
const Store = require("../models/store");
const Owner = require("../models/stackholders/owner");
const User = require("../models/stackholders/user");

const awsDelete = require("../startup/aws-s3-delete");

exports.getAll = async(req, res, next) => {
    try {
        const stores = await Store.find().populate({
            path: "owners",
            model: "Owner",
        });

        return res.status(200).json({
            message: "Success",
            data: stores,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getOne = async(req, res, next) => {
    const storeId = req.params.storeId;
    try {
        const store = await Store.findById(storeId).populate({
            path: "owners",
            model: "Owner",
        });
        if (!store) {
            const error = new Error("Could not find store.");
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: "Success", data: store });
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

        let image;
        if (req.file) {
            image = req.file.location;
        }

        if (loggedInUser.owner) {
            const owner = await Owner.findById(loggedInUser.ownerId);

            if (owner.ownerHistory.length > 0) {
                if (
                    owner.ownerHistory[owner.ownerHistory.length - 1].to == null ||
                    owner.ownerHistory[owner.ownerHistory.length - 1].to == undefined
                ) {
                    await awsDelete.delete(image);

                    const error = new Error("You're already an owner of store.");
                    error.statusCode = 400;
                    throw error;
                }
            }

            const name = JSON.parse(req.body.name);

            const existedStore = await Store.findOne({ name: name });
            if (existedStore) {
                await awsDelete.delete(image);

                const error = new Error("Store with this name is already exists");
                error.statusCode = 400;
                throw error;
            }

            const store = new Store({
                name: name,
                image: image,
                creator: loggedInUser._id,
                owners: [owner._id],
                createdAt: Date.now(),
            });
            await store.save();

            owner.ownerHistory.push({
                from: Date.now(),
                store: store._id,
            });
            owner.store = store;
            await owner.save();

            return res.status(201).json({
                message: "Store added successfully!",
                data: store,
            });
        } else if (loggedInUser.admin) {
            const name = JSON.parse(req.body.name);

            const existedStore = await Store.findOne({ name: name });
            if (existedStore) {
                await awsDelete.delete(image);

                const error = new Error("Store with this name is already exists");
                error.statusCode = 400;
                throw error;
            }

            const store = new Store({
                name: name,
                image: image,
                creator: loggedInUser._id,
                owners: [],
                createdAt: Date.now(),
            });
            await store.save();

            return res.status(201).json({
                message: "Store added successfully!",
                data: store,
            });
        } else {
            await awsDelete.delete(image);

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

        let image;
        if (req.file) {
            image = req.file.location;
        } else {
            image = store.image;
        }

        if (loggedInUser.admin) {
            const storeId = req.params.storeId;
            const store = await Store.findById(storeId);

            if (!store) {
                await awsDelete.delete(image);

                const error = new Error("Could not find store.");
                error.statusCode = 404;
                throw error;
            }

            const name = JSON.parse(req.body.name);

            const oldStore = await Store.findOne({ name: name });
            if (oldStore) {
                await awsDelete.delete(image);

                const error = new Error("Store with this name is already exist");
                error.statusCode = 400;
                throw error;
            }

            store.name = name;
            store.image = image;
            await store.save();

            return res.status(201).json({
                message: "Store updated successfully!",
                data: store,
            });
        }
        if (loggedInUser.owner) {
            const storeId = req.params.storeId;
            const store = await Store.findById(storeId);

            if (!store) {
                await awsDelete.delete(image);

                const error = new Error("Could not find store.");
                error.statusCode = 404;
                throw error;
            }

            if (store.owners.includes(loggedInUser.ownerId)) {
                const name = JSON.parse(req.body.name);
                const imageFile = req.file;

                const oldStore = await Store.findOne({ name: name });
                if (oldStore) {
                    await awsDelete.delete(image);

                    const error = new Error("Store with this name is already exist");
                    error.statusCode = 400;
                    throw error;
                }

                store.name = name;
                store.image = image;
                await store.save();

                return res.status(201).json({
                    message: "Store updated successfully!",
                    data: store,
                });
            } else {
                await awsDelete.delete(image);

                const error = new Error(
                    "Not authorized as you're not an owner of this store!"
                );
                error.statusCode = 403;
                throw error;
            }
        } else {
            await awsDelete.delete(image);

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
        const storeId = req.params.storeId;
        if (loggedInUser.admin) {
            const store = await Store.findById(storeId);
            if (!store) {
                const error = new Error("Could not find store.");
                error.statusCode = 404;
                throw error;
            }

            for (let index = 0; index < store.owners.length; index++) {
                let owner = await Owner.findById(store.owners[index]);
                if (owner) {
                    owner.ownerHistory[owner.ownerHistory.length - 1].to = Date.now();
                    owner.store = undefined;

                    let user = await User.findById(owner.user);
                    if (user) {
                        user.owner = undefined;
                        user.ownerId = undefined;
                    }

                    await user.save();

                    await owner.save();
                }
            }
            for (let index = 0; index < store.products.length; index++) {
                await Product.findByIdAndDelete(store.products[index]);
            }

            await awsDelete.delete(store.image);
            await Store.findByIdAndDelete(storeId);
            return res.status(200).json({ message: "Store deleted!" });
        } else if (loggedInUser.owner) {
            const storeId = req.params.storeId;
            const store = await Store.findById(storeId);
            if (!store) {
                const error = new Error("Could not find store.");
                error.statusCode = 404;
                throw error;
            }

            if (store.owners.includes(loggedInUser.ownerId)) {
                store.active = false;
                await store.save();

                return res.status(201).json({
                    message: "Store inactivated successfully!",
                    data: store,
                });
            } else {
                const error = new Error(
                    "Not authorized as you're not an owner of this store!"
                );
                error.statusCode = 403;
                throw error;
            }
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

exports.activateOne = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        const storeId = req.params.storeId;
        if (loggedInUser.admin) {
            const store = await Store.findById(storeId);
            if (!store) {
                const error = new Error("Could not find store.");
                error.statusCode = 404;
                throw error;
            }

            if (store.active) {
                const error = new Error("store is already activated.");
                error.statusCode = 404;
                throw error;
            }

            store.active = true;
            store.activatedBy = loggedInUser._id;
            await store.save();

            return res.status(200).json({ message: "Store activated!" });
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

exports.deactivateOne = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        const storeId = req.params.storeId;
        if (loggedInUser.admin) {
            const store = await Store.findById(storeId);
            if (!store) {
                const error = new Error("Could not find store.");
                error.statusCode = 404;
                throw error;
            }

            if (!store.active) {
                const error = new Error("store is already deactivated.");
                error.statusCode = 404;
                throw error;
            }

            store.active = false;
            store.deactivatedBy = loggedInUser._id;
            await store.save();

            return res.status(200).json({ message: "Store deactivated!" });
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

exports.lockOne = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        const storeId = req.params.storeId;
        if (loggedInUser.admin) {
            const store = await Store.findById(storeId);
            if (!store) {
                const error = new Error("Could not find store.");
                error.statusCode = 404;
                throw error;
            }

            if (store.locked) {
                const error = new Error("store is already locked.");
                error.statusCode = 404;
                throw error;
            }

            store.locked = true;
            store.lockedBy = loggedInUser._id;
            await store.save();

            return res.status(200).json({ message: "Store locked!" });
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

exports.unlockOne = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        const storeId = req.params.storeId;
        if (loggedInUser.admin) {
            const store = await Store.findById(storeId);
            if (!store) {
                const error = new Error("Could not find store.");
                error.statusCode = 404;
                throw error;
            }

            if (!store.locked) {
                const error = new Error("store is already unlocked.");
                error.statusCode = 404;
                throw error;
            }

            store.locked = false;
            store.unlockedBy = loggedInUser._id;
            await store.save();

            return res.status(200).json({ message: "Store unlocked!" });
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

// exports.getAll = async (req, res, next) => {
//   try {
//     const stores = await Store.find({
//       branches: { $not: { $size: 0 } },
//     }).populate({
//       path: "owners",
//       model: "Owner",
//     });

//     return res.status(200).json({
//       message: "Success",
//       data: stores,
//     });
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };