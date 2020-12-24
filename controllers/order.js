const Order = require("../models/order");
const Store = require("../models/store");
const Product = require("../models/product");
const ProductProperty = require("../models/productProperty");
const Owner = require("../models/stackholders/owner");
const User = require("../models/stackholders/user");

exports.getAll = async (req, res, next) => {
  try {
    const loggedInUser = req.user;

    if (loggedInUser.admin) {
      let orders = await Order.find()
        .populate({
          path: "products.product",
          model: "Product",
        })
        .populate({
          path: "store",
          model: "Store",
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
    } else if (loggedInUser.owner) {
      if (loggedInUser.store) {
        console.log(loggedInUser.store);
        let orders = await Order.find({ store: loggedInUser.store })
          .populate({
            path: "products.product",
            model: "Product",
          })
          .populate({
            path: "store",
            model: "Store",
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
      } else {
        return res.status(200).json({
          message: "Fetched successfully",
          data: [],
        });
      }
    } else if (loggedInUser.shipper) {
      let orders = await Order.find({
        $or: [{ shipped: false }, { shippedBy: loggedInUser._id }],
      })
        .populate({
          path: "products.product",
          model: "Product",
        })
        .populate({
          path: "store",
          model: "Store",
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
    } else {
      return res.status(200).json({
        message: "Fetched successfully",
        data: [],
      });
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.makeOrder = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    const to = req.body.to;
    const products = req.body.products;
    const detailedAddress = req.body.detailedAddress;
    if (!detailedAddress) {
      const error = new Error("Enter your address in detail.");
      error.statusCode = 400;
      throw error;
    }
    let sellers = [];
    let sellingStores = [];

    // Start Loop on products to check availability of them
    for (let index = 0; index < products.length; index++) {
      let product = await Product.findById(products[index].product).populate({
        path: "properties",
        model: "productProperty",
      });
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

      let selectedProperty = product.properties.find(
        (e) => e._id.toString() === products[index].productSelectedPropertyId
      );
      if (
        product.sold ||
        // product.properties[products[index].productSelectedProperty].qty == 0
        selectedProperty.qty === 0
      ) {
        const error = new Error("a product is already sold.");
        error.statusCode = 401;
        throw error;
      }

      if (
        selectedProperty.qty <
        // product.properties[products[index].productSelectedProperty].qty
        products[index].qty
      ) {
        const error = new Error("a product quantity is not available.");
        error.statusCode = 401;
        throw error;
      }

      if (product.store) {
        if (sellingStores.length > 0) {
          let obj = sellingStores.find((obj) =>
            obj.store.equals(product.store)
          );
          if (obj) {
            sellingStores[sellingStores.indexOf(obj)].products.push(
              products[index]
            );
          } else {
            sellingStores.push({
              store: product.store,
              products: [products[index]],
            });
          }
        } else {
          sellingStores.push({
            store: product.store,
            products: [products[index]],
          });
        }
      } else {
        if (sellers.length > 0) {
          let obj = sellers.find((obj) => obj.seller.equals(product.creator));
          if (obj) {
            sellers[sellers.indexOf(obj)].products.push(products[index]);
          } else {
            sellers.push({
              seller: product.creator,
              products: [products[index]],
            });
          }
        } else {
          sellers.push({
            seller: product.creator,
            products: [products[index]],
          });
        }
      }
    }

    // All items are available and ok
    // End Loop on products to check availability of them
    // Start make user order
    if (sellers.length > 0) {
      for (let i = 0; i < sellers.length; i++) {
        var sellerProfit = 0;
        for (let index = 0; index < sellers[i].products.length; index++) {
          let item = sellers[i].products[index];

          let product = await Product.findById(item.product);

          const property = await ProductProperty.findById(
            products[index].productSelectedPropertyId
          );

          if (property.qty >= item.qty) {
            property.qty = property.qty - item.qty;
            await property.save();
          } else {
            const error = new Error(
              "a product quantity is not available with the seller."
            );
            error.statusCode = 401;
            throw error;
          }

          product.orders.push({
            user: loggedInUser._id,
            at: Date.now(),
          });

          if (product.profitValue != 0) {
            sellerProfit += product.profitValue * item.qty;
          } else if (product.profitPercentage != 0) {
            sellerProfit +=
              (product.profitPercentage / 100) * item.price * item.qty;
          }

          await product.save();
        }

        const order = new Order({
          orderedAt: Date.now(),
          orderedBy: loggedInUser._id,
          products: sellers[i].products,
          seller: sellers[i].seller,
          profit: sellerProfit,
          from: sellers[i].products[0].itemAddress,
          to: to,
          detailedAddress: detailedAddress,
        });

        let userSeller = await User.findById(sellers[i].seller);

        if (userSeller.soldOrders) {
          userSeller.soldOrders.push(order._id);
        } else {
          userSeller.soldOrders = [order._id];
        }

        if (!userSeller.gainToApp) {
          userSeller.gainToApp = 0;
        }
        userSeller.gainToApp += order.profit;

        await userSeller.save();
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
    if (sellingStores.length > 0) {
      for (let i = 0; i < sellingStores.length; i++) {
        var storeProfit = 0;

        for (let index = 0; index < sellingStores[i].products.length; index++) {
          const item = sellingStores[i].products[index];

          let product = await Product.findById(item.product);

          const property = await ProductProperty.findById(
            products[index].productSelectedPropertyId
          );

          if (property.qty >= item.qty) {
            property.qty = property.qty - item.qty;
          } else {
            const error = new Error(
              "a product quantity is not available in store."
            );
            error.statusCode = 400;
            throw error;
          }

          product.orders.push({
            user: loggedInUser._id,
            at: Date.now(),
          });

          if (product.profitValue != 0) {
            storeProfit += product.profitValue * item.qty;
          } else if (product.profitPercentage != 0) {
            storeProfit +=
              (product.profitPercentage / 100) * item.price * item.qty;
          }

          await product.save();
        }

        const order = new Order({
          orderedAt: Date.now(),
          orderedBy: loggedInUser._id,
          products: sellingStores[i].products,
          store: sellingStores[i].store,
          profit: storeProfit,
          from: sellingStores[i].products[0].itemAddress,
          to: to,
          detailedAddress: detailedAddress,
        });

        let store = await Store.findById(sellingStores[i].store);
        store.orders.push(order._id);
        if (!store.gainToApp) {
          store.gainToApp = 0;
        }
        store.gainToApp += order.profit;
        await store.save();
        await order.save();

        if (loggedInUser.orders) {
          loggedInUser.orders.push(order._id);
        } else {
          loggedInUser.orders = [order._id];
        }
      }
      await loggedInUser.save();
    }
    // // // End make store order
    return res.status(200).json({ message: "order created!", data: "Done" });
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

    const order = await Order.findById(orderId);
    if (!order) {
      const error = new Error("Could not find order.");
      error.statusCode = 404;
      throw error;
    }
    if (loggedInUser.admin) {
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
    }

    if (order.store) {
      if (loggedInUser.owner) {
        const store = await Store.findById(order.store);
        if (!store) {
          const error = new Error("Could not find store.");
          error.statusCode = 404;
          throw error;
        }

        if (store.owners.includes(loggedInUser.ownerId)) {
          if (order.confirmed) {
            const error = new Error("order is already confirmed.");
            error.statusCode = 400;
            throw error;
          }

          order.confirmed = true;
          order.confirmedAt = Date.now();
          order.confirmedBy = loggedInUser._id;
          await order.save();

          return res.status(200).json({ message: "order confirmed!" });
        } else {
          const error = new Error(
            "Not authorized as you're not an owner of this store!"
          );
          error.statusCode = 403;
          throw error;
        }
      } else {
        const error = new Error(
          "Not authorized as you're not an admin or owner!"
        );
        error.statusCode = 403;
        throw error;
      }
    } else {
      if (order.seller.equals(loggedInUser._id)) {
        if (order.confirmed) {
          const error = new Error("order is already confirmed.");
          error.statusCode = 400;
          throw error;
        }

        order.confirmed = true;
        order.confirmedAt = Date.now();
        order.confirmedBy = loggedInUser._id;
        await order.save();

        return res.status(200).json({ message: "order confirmed!" });
      } else {
        const error = new Error(
          "Not authorized as you're not the seller of this order!"
        );
        error.statusCode = 403;
        throw error;
      }
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

exports.deliverOne = async (req, res, next) => {
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

exports.getStore = async (req, res, next) => {
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

exports.cancelOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);
    if (!order) {
      const error = new Error("Could not find order.");
      error.statusCode = 404;
      throw error;
    }

    const product = req.body;

    let itemInOrder = order.products.find(
      (e) =>
        e.product.toString() === product.product.toString() &&
        e.productName === product.productName
    );

    if (!itemInOrder) {
      const error = new Error("Couldn't find item in order.");
      error.statusCode = 404;
      throw error;
    }

    if (loggedInUser._id.equals(order.orderedBy)) {
      if (order.shipped) {
        const error = new Error("order is already shipped.");
        error.statusCode = 404;
        throw error;
      }

      if (order.delivered) {
        const error = new Error("order is already delivered.");
        error.statusCode = 404;
        throw error;
      }

      order.products.pull(itemInOrder);

      const parsedProperty = await ProductProperty.findById(
        itemInOrder.productSelectedPropertyId
      );
      if (parsedProperty) {
        parsedProperty.qty += itemInOrder.qty;
        await parsedProperty.save();
      }

      if (order.products && order.products.length > 0) {
        await order.save();
      } else {
        if (loggedInUser.orders.includes(orderId)) {
          loggedInUser.orders.pull(orderId);
          await loggedInUser.save();
        }

        await Order.findByIdAndDelete(orderId);
      }
      return res.status(200).json({ message: "order canceled!" });
    } else {
      const error = new Error("Not authorized as you're not the buyer!");
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

exports.getOne = async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);
    if (!order) {
      const error = new Error("Could not find order.");
      error.statusCode = 404;
      throw error;
    }
    return res
      .status(200)
      .json({ message: "fetched successfully!", data: order });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
