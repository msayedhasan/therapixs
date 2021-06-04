const Product = require("../models/product");
const ProductProperty = require("../models/productProperty");
const Cart = require("../models/cart");
const User = require("../models/stackholders/user");
const shippingController = require("./shipping");

calculateShipping = async (cart, shippingAddress) => {
  try {
    //** Calculate items shipping cost */
    if (cart.items.length > 0 && shippingAddress) {
      //** Calculate shipping cost */
      for (let index = 0; index < cart.items.length; index++) {
        const item = cart.items[index];
        const parsedItem = await Product.findById(item.product)
          .populate({
            path: "store",
            model: "Store",
            populate: {
              path: "address",
              model: "Place",
            },
          })
          .populate({
            path: "creator",
            model: "User",
          });
        if (!parsedItem) {
          //** if couldn't parse product remove it from cart */
          cart.items.splice(index, 1);
        }
        //** Calculate shipping cost */
        if (parsedItem.store) {
          let shippingCost = await shippingController.getShippingCost(
            parsedItem.store.address.name,
            shippingAddress
          );
          if (shippingCost) {
            cart.items[index].shipping = shippingCost;
          } else {
            cart.items[index].shipping = undefined;
          }
        } else if (parsedItem.creator.address) {
          let shippingCost = await shippingController.getShippingCost(
            parsedItem.creator.address,
            shippingAddress
          );
          if (shippingCost) {
            cart.items[index].shipping = shippingCost;
          } else {
            cart.items[index].shipping = undefined;
          }
        } else {
          cart.items[index].shipping = undefined;
        }
      }
    }
    //** Calculate cart shipping cost */
    cart.shipping = 0;
    if (cart.items.length > 0) {
      for (
        let index = 0;
        index < cart.items.filter((e) => e.shipping).length;
        index++
      ) {
        const itemWithShipping = cart.items.filter((e) => e.shipping)[index];
        cart.shipping = cart.shipping + itemWithShipping.shipping;
      }
      if (cart.items.filter((e) => e.shipping).length > 0) {
        cart.shipping =
          cart.shipping / cart.items.filter((e) => e.shipping).length;
      } else {
        cart.shipping = undefined;
      }
    }

    return cart;
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getCart = async (req, res, next) => {
  try {
    const loggedInUser = req.user;

    const shippingAddress = req.body.shippingAddress;

    if (loggedInUser.cart) {
      let cart = await Cart.findById(loggedInUser.cart)
        .populate({
          path: "items.product",
          model: "Product",
        })
        .populate({
          path: "items.property",
          model: "productProperty",
        });

      if (!cart) {
        cart = new Cart({
          user: loggedInUser._id,
          items: [],
          shipping: 0,
        });
      }

      cart = await calculateShipping(cart, shippingAddress);
      await cart.save();

      return res.status(200).json({
        message: "Fetched successfully",
        data: cart,
      });
    } else {
      let cart = new Cart({
        user: loggedInUser._id,
        items: [],
        shipping: 0,
      });
      let user = await User.findById(loggedInUser._id);
      user.cart = cart._id;
      await cart.save();
      await user.save();

      return res.status(200).json({
        message: "Fetched successfully",
        data: cart,
      });
    }
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.addItem = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    let cart;
    if (loggedInUser.cart) {
      cart = await Cart.findById(loggedInUser.cart)
        .populate({
          path: "items.product",
          model: "Product",
        })
        .populate({
          path: "items.property",
          model: "productProperty",
        });
    } else {
      cart = new Cart({
        user: loggedInUser._id,
        items: [],
        shipping: 0,
      });

      let user = await User.findById(loggedInUser._id);
      user.cart = cart._id;
      await user.save();
    }
    const productId = req.body.productId;
    const productSelectedPropertyId = req.body.productSelectedPropertyId;
    const shippingAddress = req.body.shippingAddress;

    const product = await Product.findById(productId);
    const productProperty = await ProductProperty.findById(
      productSelectedPropertyId
    );
    if (!product || !productProperty) {
      const error = new Error("failed to add item!");
      error.statusCode = 400;
      throw error;
    }
    // check item exist in cart or not
    let itemExist = cart.items.filter((e) => {
      return (
        e.product.equals(productId) &&
        e.property.equals(productSelectedPropertyId)
      );
    });
    // console.log(itemExist);
    if (itemExist && itemExist.length > 0) {
      if (productProperty.qty > itemExist[0].qty) {
        itemExist[0].qty = itemExist[0].qty + 1;
      } else {
        const error = new Error("No more of this item in store!");
        error.statusCode = 400;
        throw error;
      }
    } else {
      cart.items.push({
        product: product,
        qty: 1,
        availableQty: productProperty.qty,
        property: productProperty,
      });
    }

    cart = await calculateShipping(cart, shippingAddress);
    await cart.save();
    return res.status(200).json({
      message: "Fetched successfully",
      data: cart,
    });
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.removeItem = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    let cart;
    if (loggedInUser.cart) {
      cart = await Cart.findById(loggedInUser.cart)
        .populate({
          path: "items.product",
          model: "Product",
        })
        .populate({
          path: "items.property",
          model: "productProperty",
        });
    } else {
      cart = new Cart({
        user: loggedInUser._id,
        items: [],
        shipping: 0,
      });

      let user = await User.findById(loggedInUser._id);
      user.cart = cart._id;
      await user.save();
    }

    const productId = req.body.productId;
    const productSelectedPropertyId = req.body.productSelectedPropertyId;
    const shippingAddress = req.body.shippingAddress;

    const product = await Product.findById(productId);
    const productProperty = await ProductProperty.findById(
      productSelectedPropertyId
    );
    // check item exist in cart or not
    let itemExist = cart.items.filter((e) => {
      return (
        e.product._id.equals(productId) &&
        e.property.equals(productSelectedPropertyId)
      );
    });
    if (itemExist && itemExist.length > 0) {
      if (itemExist[0].qty > 1) {
        itemExist[0].qty = itemExist[0].qty - 1;
      } else {
        cart.items.splice(cart.items.indexOf(itemExist[0]), 1);
      }

      cart = await calculateShipping(cart, shippingAddress);
      await cart.save();
      return res.status(200).json({
        message: "Removed successfully",
        data: cart,
      });
    } else {
      return res.status(200).json({
        message: "failed to remove item!",
        data: cart,
      });
      const error = new Error("failed to remove item!");
      error.statusCode = 400;
      throw error;
    }
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    let cart;
    if (loggedInUser.cart) {
      cart = await Cart.findById(loggedInUser.cart)
        .populate({
          path: "items.product",
          model: "Product",
        })
        .populate({
          path: "items.property",
          model: "productProperty",
        });
    } else {
      cart = new Cart({
        user: loggedInUser._id,
        items: [],
        shipping: 0,
      });

      let user = await User.findById(loggedInUser._id);
      user.cart = cart._id;
      await user.save();
    }

    const productId = req.body.productId;
    const productSelectedPropertyId = req.body.productSelectedPropertyId;
    const shippingAddress = req.body.shippingAddress;

    const product = await Product.findById(productId);
    const productProperty = await ProductProperty.findById(
      productSelectedPropertyId
    );

    // check item exist in cart or not
    let itemExist = cart.items.filter((e) => {
      if (productSelectedPropertyId) {
        return (
          e.product.equals(productId) &&
          e.property.equals(productSelectedPropertyId)
        );
      } else {
        return e.product.equals(productId);
      }
    });
    if (itemExist && itemExist.length > 0) {
      cart.items.splice(cart.items.indexOf(itemExist[0]), 1);

      cart = await calculateShipping(cart, shippingAddress);
      await cart.save();
    }
    return res.status(200).json({
      message: "Item deleted",
      data: cart,
    });
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
