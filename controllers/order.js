const Order = require("../models/order");
const Store = require("../models/store");
const Product = require("../models/product");
const Owner = require("../models/stackholders/owner");
const User = require("../models/stackholders/user");

exports.getAll = async(req, res, next) => {
    try {
        let orders = await Order.find()
            .populate({
                path: "products.product",
                model: "Product",
                populate: {
                    path: "store",
                    model: "Store",
                },
            })
            .populate({
                path: "orderedBy",
                model: "User",
            })
            .populate({
                path: "seller",
                model: "User",
            });
        return res.status(200).json({
            message: "Fetched successfully",
            data: orders,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.makeOrder = async(req, res, next) => {
    try {
        const loggedInUser = req.user;

        const products = req.body.products;

        let userProducts = [];
        let storeProducts = [];

        // Start Loop on products to check availability of them
        for (let index = 0; index < products.length; index++) {
            let product = await Product.findById(products[index].product);
            if (!product) {
                const error = new Error(
                    "Could not find a product please check your cart again."
                );
                error.statusCode = 404;
                throw error;
            }
            if (!product.active) {
                const error = new Error("a product is not active.");
                error.statusCode = 401;
                throw error;
            }
            if (
                product.sold ||
                product.properties[products[index].productSelectedProperty].qty == 0
            ) {
                const error = new Error("a product is already sold.");
                error.statusCode = 401;
                throw error;
            }

            if (
                product.properties[products[index].productSelectedProperty].qty <
                products[index].qty
            ) {
                const error = new Error("a product quantity is not available.");
                error.statusCode = 401;
                throw error;
            }

            if (product.store) {
                storeProducts.push(products[index]);
            } else {
                userProducts.push(products[index]);
            }
        }
        // End Loop on products to check availability of them
        // Start make user order
        if (userProducts.length > 0) {
            for (let i = 0; i < userProducts.length; i++) {
                let product = await Product.findById(userProducts[i].product);

                if (
                    product.properties[userProducts[i].productSelectedProperty].qty >=
                    userProducts[i].qty
                ) {
                    product.properties[userProducts[i].productSelectedProperty].qty =
                        product.properties[userProducts[i].productSelectedProperty].qty -
                        userProducts[i].qty;
                } else {
                    const error = new Error(
                        "a product quantity is not available with the creator."
                    );
                    error.statusCode = 401;
                    throw error;
                }

                product.orderedBy = loggedInUser._id;
                product.orderedAt = Date.now();

                const order = new Order({
                    orderedAt: Date.now(),
                    orderedBy: loggedInUser._id,
                    products: userProducts[i],
                    seller: product.creator,
                });

                let seller = await User.findById(product.creator);
                if (!seller) {
                    const error = new Error("couldn't find seller.");
                    error.statusCode = 404;
                    throw error;
                }

                if (seller.soldOrders) {
                    seller.soldOrders.push(order._id);
                } else {
                    seller.soldOrders = [order._id];
                }

                order.seller = seller._id;
                await product.save();

                await seller.save();
                await order.save();
                if (loggedInUser.orders) {
                    loggedInUser.orders.push(order._id);
                } else {
                    loggedInUser.orders = [order._id];
                }
            }
            await loggedInUser.save();
        }
        // End make user order

        // Start make store order
        if (storeProducts.length > 0) {
            const order = new Order({
                orderedAt: Date.now(),
                orderedBy: loggedInUser._id,
                products: storeProducts,
                store: storeProducts[0].store,
            });
            for (let i = 0; i < storeProducts.length; i++) {
                let product = await Product.findById(storeProducts[i].product);
                if (product.qty >= storeProducts[i].qty) {
                    product.qty = product.qty - storeProducts[i].qty;
                } else {
                    const error = new Error(
                        "a product quantity is not available in store."
                    );
                    error.statusCode = 404;
                    throw error;
                }
                product.orderedBy = loggedInUser._id;
                product.orderedAt = Date.now();
                await product.save();
            }
            await order.save();

            let store = await Store.findById(storeProducts[0].store);

            if (!store) {
                const error = new Error("Could not find a store.");
                error.statusCode = 404;
                throw error;
            }

            store.orders.push(order._id);
            await store.save();

            if (loggedInUser.orders) {
                loggedInUser.orders.push(order._id);
            } else {
                loggedInUser.orders = [order._id];
            }
            await loggedInUser.save();
        }
        // End make store order
        return res.status(200).json({ message: "order created!", data: "Done" });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.confirmOne = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        const orderId = req.params.orderId;
        if (loggedInUser.admin || loggedInUser.shipper) {
            const order = await Order.findById(orderId);
            if (!order) {
                const error = new Error("Could not find order.");
                error.statusCode = 404;
                throw error;
            }

            if (order.confirmed) {
                const error = new Error("order is already confirmed.");
                error.statusCode = 404;
                throw error;
            }

            order.confirmed = true;
            order.confirmedAt = Date.now();
            order.confirmedBy = loggedInUser._id;
            await order.save();

            return res.status(200).json({ message: "order confirmed!" });
        } else {
            const error = new Error(
                "Not authorized as you're not an admin or shipper!"
            );
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

exports.shipOne = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        const orderId = req.params.orderId;
        if (loggedInUser.admin || loggedInUser.shipper) {
            const order = await Order.findById(orderId);
            if (!order) {
                const error = new Error("Could not find order.");
                error.statusCode = 404;
                throw error;
            }

            if (order.shipped) {
                const error = new Error("order is already shipped.");
                error.statusCode = 404;
                throw error;
            }

            order.shipped = true;
            order.shippedAt = Date.now();
            order.shippedBy = loggedInUser._id;
            await order.save();

            return res.status(200).json({ message: "order shipped!" });
        } else {
            const error = new Error(
                "Not authorized as you're not an admin or shipper!"
            );
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

exports.deliverOne = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        const orderId = req.params.orderId;
        if (loggedInUser.admin || loggedInUser.shipper) {
            const order = await Order.findById(orderId);
            if (!order) {
                const error = new Error("Could not find order.");
                error.statusCode = 404;
                throw error;
            }

            if (order.delivered) {
                const error = new Error("order is already delivered.");
                error.statusCode = 404;
                throw error;
            }

            order.delivered = true;
            order.deliveredAt = Date.now();
            order.deliveredBy = loggedInUser._id;
            await order.save();

            return res.status(200).json({ message: "order delivered!" });
        } else {
            const error = new Error(
                "Not authorized as you're not an admin or shipper!"
            );
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

exports.getStore = async(req, res, next) => {
    const storeId = req.params.storeId;
    try {
        const loggedInUser = req.user;
        if (loggedInUser.admin) {
            const store = await Store.findById(storeId)
                .populate({
                    path: "products.product",
                    model: "Product",
                    populate: {
                        path: "store",
                        model: "Store",
                    },
                })
                .populate({
                    path: "orderedBy",
                    model: "User",
                })
                .populate({
                    path: "cancelledBy",
                    model: "User",
                })
                .populate({
                    path: "confirmedBy",
                    model: "User",
                })
                .populate({
                    path: "shippedBy",
                    model: "User",
                });
            if (!store) {
                const error = new Error("Could not find store.");
                error.statusCode = 404;
                throw error;
            }
            return res.status(200).json({ message: "Success", data: store });
        } else if (loggedInUser.owner) {
            const owner = await Owner.findById(loggedInUser.ownerId);

            if (!owner) {
                const error = new Error("Could not find your ownership.");
                error.statusCode = 404;
                throw error;
            }

            const store = await Store.findById(storeId)
                .populate({
                    path: "products.product",
                    model: "Product",
                    populate: {
                        path: "store",
                        model: "Store",
                    },
                })
                .populate({
                    path: "orderedBy",
                    model: "User",
                })
                .populate({
                    path: "cancelledBy",
                    model: "User",
                })
                .populate({
                    path: "confirmedBy",
                    model: "User",
                })
                .populate({
                    path: "shippedBy",
                    model: "User",
                });
            if (!store) {
                const error = new Error("Could not find store.");
                error.statusCode = 404;
                throw error;
            }

            if (!store.owners.includes(loggedInUser.ownerId)) {
                const error = new Error("You're not an owner of this store.");
                error.statusCode = 401;
                throw error;
            }

            return res.status(200).json({ message: "Success", data: store });
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