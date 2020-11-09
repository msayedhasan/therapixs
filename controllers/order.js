const Order = require("../models/order");

exports.getAll = async (req, res, next) => {
  try {
    let orders = await Order.find()
      .populate({
        path: "product",
        model: "Product",
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

exports.confirmOne = async (req, res, next) => {
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

exports.shipOne = async (req, res, next) => {
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

exports.deliverOne = async (req, res, next) => {
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
