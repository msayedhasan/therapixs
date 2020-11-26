const Order = require("../models/order");
const Product = require("../models/product");

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
            if (product.sold || product.qty == 0) {
                const error = new Error("a product is already sold.");
                error.statusCode = 401;
                throw error;
            }

            if (product.qty < products[index].qty) {
                const error = new Error("a product quantity is not available.");
                error.statusCode = 404;
                throw error;
            }

            if (product.store) {
                storeProducts.push(products[index]);
            } else {
                userProducts.push(products[index]);
            }
        }
        // End Loop on products to check availability of them
        console.log(userProducts.length);
        console.log(storeProducts.length);
        // Start make user order
        if (userProducts.length > 0) {
            const order = new Order({
                orderedAt: Date.now(),
                orderedBy: loggedInUser._id,
                products: userProducts,
            });
            for (let i = 0; i < userProducts.length; i++) {
                let product = await Product.findById(userProducts[i].product);
                if (product.qty > userProducts[i].qty) {
                    product.qty = product.qty - userProducts[i].qty;
                } else {
                    const error = new Error("a product quantity is not available.");
                    error.statusCode = 404;
                    throw error;
                }
                product.orderedBy = loggedInUser._id;
                product.orderedAt = Date.now();
                await product.save();
            }
            await order.save();
            if (loggedInUser.orders) {
                loggedInUser.orders.push(order._id);
            } else {
                loggedInUser.orders = [order._id];
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
                    const error = new Error("a product quantity is not available.");
                    error.statusCode = 404;
                    throw error;
                }
                product.orderedBy = loggedInUser._id;
                product.orderedAt = Date.now();
                await product.save();
            }
            await order.save();
            if (loggedInUser.orders) {
                loggedInUser.orders.push(order._id);
            } else {
                loggedInUser.orders = [order._id];
            }
            await loggedInUser.save();
        }
        // End make store order

        return res.status(200).json({ message: "order created!" });
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
        if (loggedInUser.shipper) {
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
            const error = new Error("Not authorized as you're not a shipper!");
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
        if (loggedInUser.shipper) {
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

exports.deliverOne = async(req, res, next) => {
    try {
        const loggedInUser = req.user;
        const orderId = req.params.orderId;
        if (loggedInUser.shipper) {
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