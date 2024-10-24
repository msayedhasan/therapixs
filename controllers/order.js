// const Order = require("../models/order");
// const Product = require("../models/test");
// const User = require("../models/stackholders/user");

// exports.getAll = async(req, res, next) => {
//     try {
//         const loggedInUser = req.user;

//         if (loggedInUser.admin) {
//             let orders = await Order.find()
//                 .populate({
//                     path: "products.product",
//                     model: "Product",
//                 })
//                 .populate({
//                     path: "products.productSelectedPropertyId",
//                     model: "productProperty",
//                 })
//                 .populate({
//                     path: "clinic",
//                     model: "Clinic",
//                 })
//                 .populate({
//                     path: "orderedBy",
//                     model: "User",
//                 })
//                 .populate({
//                     path: "seller",
//                     model: "User",
//                 });
//             return res.status(200).json({
//                 message: "Fetched successfully",
//                 data: orders,
//             });
//         } else if (loggedInUser.owner) {
//             if (loggedInUser.clinic) {
//                 console.log(loggedInUser.clinic);
//                 let orders = await Order.find({ clinic: loggedInUser.clinic })
//                     .populate({
//                         path: "products.product",
//                         model: "Product",
//                     })
//                     .populate({
//                         path: "clinic",
//                         model: "Clinic",
//                     })
//                     .populate({
//                         path: "orderedBy",
//                         model: "User",
//                     })
//                     .populate({
//                         path: "seller",
//                         model: "User",
//                     });
//                 return res.status(200).json({
//                     message: "Fetched successfully",
//                     data: orders,
//                 });
//             } else {
//                 return res.status(200).json({
//                     message: "Fetched successfully",
//                     data: [],
//                 });
//             }
//         } else if (loggedInUser.shipper) {
//             let orders = await Order.find({
//                     $or: [{ shipped: false }, { shippedBy: loggedInUser._id }],
//                 })
//                 .populate({
//                     path: "products.product",
//                     model: "Product",
//                 })
//                 .populate({
//                     path: "clinic",
//                     model: "Clinic",
//                 })
//                 .populate({
//                     path: "orderedBy",
//                     model: "User",
//                 })
//                 .populate({
//                     path: "seller",
//                     model: "User",
//                 });
//             return res.status(200).json({
//                 message: "Fetched successfully",
//                 data: orders,
//             });
//         } else {
//             return res.status(200).json({
//                 message: "Fetched successfully",
//                 data: [],
//             });
//         }
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

// exports.makeOrder = async(req, res, next) => {
//     try {
//         const loggedInUser = req.user;
//         const to = req.body.to;
//         const products = req.body.products;
//         const detailedAddress = req.body.detailedAddress;
//         if (!detailedAddress) {
//             const error = new Error("Enter your address in detail.");
//             error.statusCode = 400;
//             throw error;
//         }
//         let sellers = [];
//         let sellingClinics = [];

//         // Start Loop on products to check availability of them
//         for (let index = 0; index < products.length; index++) {
//             let product = await Product.findById(products[index].product).populate({
//                 path: "properties",
//                 model: "productProperty",
//             });
//             if (!product) {
//                 const error = new Error(
//                     "Could not find a product please check your cart again."
//                 );
//                 error.statusCode = 404;
//                 throw error;
//             }
//             if (!product.active) {
//                 const error = new Error("a product is not active.");
//                 error.statusCode = 401;
//                 throw error;
//             }

//             let selectedProperty = product.properties.find(
//                 (e) => e._id.toString() === products[index].productSelectedPropertyId
//             );
//             if (
//                 product.sold ||
//                 // product.properties[products[index].productSelectedProperty].qty == 0
//                 selectedProperty.qty === 0
//             ) {
//                 const error = new Error("a product is already sold.");
//                 error.statusCode = 401;
//                 throw error;
//             }

//             if (
//                 selectedProperty.qty <
//                 // product.properties[products[index].productSelectedProperty].qty
//                 products[index].qty
//             ) {
//                 const error = new Error("a product quantity is not available.");
//                 error.statusCode = 401;
//                 throw error;
//             }

//             if (product.clinic) {
//                 if (sellingClinics.length > 0) {
//                     let obj = sellingClinics.find((obj) =>
//                         obj.clinic.equals(product.clinic)
//                     );
//                     if (obj) {
//                         sellingClinics[sellingClinics.indexOf(obj)].products.push(
//                             products[index]
//                         );
//                     } else {
//                         sellingClinics.push({
//                             clinic: product.clinic,
//                             products: [products[index]],
//                         });
//                     }
//                 } else {
//                     sellingClinics.push({
//                         clinic: product.clinic,
//                         products: [products[index]],
//                     });
//                 }
//             } else {
//                 if (sellers.length > 0) {
//                     let obj = sellers.find((obj) => obj.seller.equals(product.creator));
//                     if (obj) {
//                         sellers[sellers.indexOf(obj)].products.push(products[index]);
//                     } else {
//                         sellers.push({
//                             seller: product.creator,
//                             products: [products[index]],
//                         });
//                     }
//                 } else {
//                     sellers.push({
//                         seller: product.creator,
//                         products: [products[index]],
//                     });
//                 }
//             }
//         }

//         // All items are available and ok
//         // End Loop on products to check availability of them
//         // Start make user order
//         if (sellers.length > 0) {
//             for (let i = 0; i < sellers.length; i++) {
//                 var sellerProfit = 0;
//                 for (let index = 0; index < sellers[i].products.length; index++) {
//                     let item = sellers[i].products[index];

//                     let product = await Product.findById(item.product);

//                     const property = await ProductProperty.findById(
//                         products[index].productSelectedPropertyId
//                     );

//                     if (property.qty >= item.qty) {
//                         property.qty = property.qty - item.qty;
//                         await property.save();
//                     } else {
//                         const error = new Error(
//                             "a product quantity is not available with the seller."
//                         );
//                         error.statusCode = 401;
//                         throw error;
//                     }

//                     product.orders.push({
//                         user: loggedInUser._id,
//                         at: Date.now(),
//                     });

//                     if (product.profitValue != 0) {
//                         sellerProfit += product.profitValue * item.qty;
//                     } else if (product.profitPercentage != 0) {
//                         sellerProfit +=
//                             (product.profitPercentage / 100) * item.price * item.qty;
//                     }

//                     await product.save();
//                 }

//                 const order = new Order({
//                     orderedAt: Date.now(),
//                     orderedBy: loggedInUser._id,
//                     products: sellers[i].products,
//                     seller: sellers[i].seller,
//                     profit: sellerProfit,
//                     from: sellers[i].products[0].itemAddress,
//                     to: to,
//                     detailedAddress: detailedAddress,
//                 });

//                 let userSeller = await User.findById(sellers[i].seller);

//                 if (userSeller.soldOrders) {
//                     userSeller.soldOrders.push(order._id);
//                 } else {
//                     userSeller.soldOrders = [order._id];
//                 }

//                 if (!userSeller.gainToApp) {
//                     userSeller.gainToApp = 0;
//                 }
//                 userSeller.gainToApp += order.profit;

//                 await userSeller.save();
//                 await order.save();

//                 if (loggedInUser.orders) {
//                     loggedInUser.orders.push(order._id);
//                 } else {
//                     loggedInUser.orders = [order._id];
//                 }
//             }
//             await loggedInUser.save();
//         }
//         // End make user order

//         // Start make clinic order
//         if (sellingClinics.length > 0) {
//             for (let i = 0; i < sellingClinics.length; i++) {
//                 var clinicProfit = 0;

//                 for (let index = 0; index < sellingClinics[i].products.length; index++) {
//                     const item = sellingClinics[i].products[index];

//                     let product = await Product.findById(item.product);

//                     const property = await ProductProperty.findById(
//                         products[index].productSelectedPropertyId
//                     );

//                     if (property.qty >= item.qty) {
//                         property.qty = property.qty - item.qty;
//                     } else {
//                         const error = new Error(
//                             "a product quantity is not available in clinic."
//                         );
//                         error.statusCode = 400;
//                         throw error;
//                     }

//                     product.orders.push({
//                         user: loggedInUser._id,
//                         at: Date.now(),
//                     });

//                     if (product.profitValue != 0) {
//                         clinicProfit += product.profitValue * item.qty;
//                     } else if (product.profitPercentage != 0) {
//                         clinicProfit +=
//                             (product.profitPercentage / 100) * item.price * item.qty;
//                     }

//                     await product.save();
//                 }

//                 const order = new Order({
//                     orderedAt: Date.now(),
//                     orderedBy: loggedInUser._id,
//                     products: sellingClinics[i].products,
//                     clinic: sellingClinics[i].clinic,
//                     profit: clinicProfit,
//                     from: sellingClinics[i].products[0].itemAddress,
//                     to: to,
//                     detailedAddress: detailedAddress,
//                 });

//                 let clinic = await Clinic.findById(sellingClinics[i].clinic);
//                 clinic.orders.push(order._id);
//                 if (!clinic.gainToApp) {
//                     clinic.gainToApp = 0;
//                 }
//                 clinic.gainToApp += order.profit;
//                 await clinic.save();
//                 await order.save();

//                 if (loggedInUser.orders) {
//                     loggedInUser.orders.push(order._id);
//                 } else {
//                     loggedInUser.orders = [order._id];
//                 }
//             }
//             await loggedInUser.save();
//         }
//         // // // End make clinic order
//         return res.status(200).json({ message: "order created!", data: "Done" });
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

// exports.confirmOne = async(req, res, next) => {
//     try {
//         const loggedInUser = req.user;
//         const orderId = req.params.orderId;

//         const order = await Order.findById(orderId);
//         if (!order) {
//             const error = new Error("Could not find order.");
//             error.statusCode = 404;
//             throw error;
//         }
//         if (loggedInUser.admin) {
//             if (order.confirmed) {
//                 const error = new Error("order is already confirmed.");
//                 error.statusCode = 404;
//                 throw error;
//             }

//             order.confirmed = true;
//             order.confirmedAt = Date.now();
//             order.confirmedBy = loggedInUser._id;
//             await order.save();

//             return res.status(200).json({ message: "order confirmed!" });
//         }

//         if (order.clinic) {
//             if (loggedInUser.owner) {
//                 const clinic = await Clinic.findById(order.clinic);
//                 if (!clinic) {
//                     const error = new Error("Could not find clinic.");
//                     error.statusCode = 404;
//                     throw error;
//                 }

//                 if (clinic.owners.includes(loggedInUser.ownerId)) {
//                     if (order.confirmed) {
//                         const error = new Error("order is already confirmed.");
//                         error.statusCode = 400;
//                         throw error;
//                     }

//                     order.confirmed = true;
//                     order.confirmedAt = Date.now();
//                     order.confirmedBy = loggedInUser._id;
//                     await order.save();

//                     return res.status(200).json({ message: "order confirmed!" });
//                 } else {
//                     const error = new Error(
//                         "Not authorized as you're not an owner of this clinic!"
//                     );
//                     error.statusCode = 403;
//                     throw error;
//                 }
//             } else {
//                 const error = new Error(
//                     "Not authorized as you're not an admin or owner!"
//                 );
//                 error.statusCode = 403;
//                 throw error;
//             }
//         } else {
//             if (order.seller.equals(loggedInUser._id)) {
//                 if (order.confirmed) {
//                     const error = new Error("order is already confirmed.");
//                     error.statusCode = 400;
//                     throw error;
//                 }

//                 order.confirmed = true;
//                 order.confirmedAt = Date.now();
//                 order.confirmedBy = loggedInUser._id;
//                 await order.save();

//                 return res.status(200).json({ message: "order confirmed!" });
//             } else {
//                 const error = new Error(
//                     "Not authorized as you're not the seller of this order!"
//                 );
//                 error.statusCode = 403;
//                 throw error;
//             }
//         }
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

// exports.shipOne = async(req, res, next) => {
//     try {
//         const loggedInUser = req.user;
//         const orderId = req.params.orderId;
//         if (loggedInUser.admin || loggedInUser.shipper) {
//             const order = await Order.findById(orderId);
//             if (!order) {
//                 const error = new Error("Could not find order.");
//                 error.statusCode = 404;
//                 throw error;
//             }

//             if (order.shipped) {
//                 const error = new Error("order is already shipped.");
//                 error.statusCode = 404;
//                 throw error;
//             }

//             order.shipped = true;
//             order.shippedAt = Date.now();
//             order.shippedBy = loggedInUser._id;
//             await order.save();

//             return res.status(200).json({ message: "order shipped!" });
//         } else {
//             const error = new Error(
//                 "Not authorized as you're not an admin or shipper!"
//             );
//             error.statusCode = 403;
//             throw error;
//         }
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

// exports.deliverOne = async(req, res, next) => {
//     try {
//         const loggedInUser = req.user;
//         const orderId = req.params.orderId;
//         if (loggedInUser.admin || loggedInUser.shipper) {
//             const order = await Order.findById(orderId);
//             if (!order) {
//                 const error = new Error("Could not find order.");
//                 error.statusCode = 404;
//                 throw error;
//             }

//             if (order.delivered) {
//                 const error = new Error("order is already delivered.");
//                 error.statusCode = 404;
//                 throw error;
//             }

//             order.delivered = true;
//             order.deliveredAt = Date.now();
//             order.deliveredBy = loggedInUser._id;
//             await order.save();

//             return res.status(200).json({ message: "order delivered!" });
//         } else {
//             const error = new Error(
//                 "Not authorized as you're not an admin or shipper!"
//             );
//             error.statusCode = 403;
//             throw error;
//         }
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

// exports.getClinic = async(req, res, next) => {
//     const clinicId = req.params.clinicId;
//     try {
//         const loggedInUser = req.user;
//         console.log(loggedInUser.owner);

//         if (loggedInUser.admin) {
//             const clinic = await Clinic.findById(clinicId)
//                 .populate({
//                     path: "products.product",
//                     model: "Product",
//                     populate: {
//                         path: "clinic",
//                         model: "Clinic",
//                     },
//                 })
//                 .populate({
//                     path: "orders",
//                     model: "Order",
//                 })
//                 .populate({
//                     path: "orderedBy",
//                     model: "User",
//                 })
//                 .populate({
//                     path: "cancelledBy",
//                     model: "User",
//                 })
//                 .populate({
//                     path: "confirmedBy",
//                     model: "User",
//                 })
//                 .populate({
//                     path: "shippedBy",
//                     model: "User",
//                 });
//             if (!clinic) {
//                 const error = new Error("Could not find clinic.");
//                 error.statusCode = 404;
//                 throw error;
//             }
//             return res.status(200).json({ message: "Success", data: clinic });
//         } else if (loggedInUser.owner) {
//             const owner = await Owner.findById(loggedInUser.ownerId);

//             if (!owner) {
//                 const error = new Error("Could not find your ownership.");
//                 error.statusCode = 404;
//                 throw error;
//             }

//             const clinic = await Clinic.findById(clinicId)
//                 .populate({
//                     path: "products.product",
//                     model: "Product",
//                     populate: {
//                         path: "clinic",
//                         model: "Clinic",
//                     },
//                 })
//                 .populate({
//                     path: "orders",
//                     model: "Order",
//                 });
//             if (!clinic) {
//                 const error = new Error("Could not find clinic.");
//                 error.statusCode = 404;
//                 throw error;
//             }

//             if (!clinic.owners.includes(loggedInUser.ownerId)) {
//                 const error = new Error("You're not an owner of this clinic.");
//                 error.statusCode = 401;
//                 throw error;
//             }

//             return res.status(200).json({ message: "Success", data: clinic });
//         } else {
//             const error = new Error("Not authorized!");
//             error.statusCode = 403;
//             throw error;
//         }
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

// exports.cancelOne = async(req, res, next) => {
//     try {
//         const loggedInUser = req.user;
//         const orderId = req.params.orderId;
//         const order = await Order.findById(orderId);
//         if (!order) {
//             const error = new Error("Could not find order.");
//             error.statusCode = 404;
//             throw error;
//         }

//         const product = req.body;

//         let itemInOrder = order.products.find(
//             (e) =>
//             e.product.toString() === product.product.toString() &&
//             e.productName === product.productName
//         );

//         if (!itemInOrder) {
//             const error = new Error("Couldn't find item in order.");
//             error.statusCode = 404;
//             throw error;
//         }

//         if (loggedInUser._id.equals(order.orderedBy)) {
//             if (order.shipped) {
//                 const error = new Error("order is already shipped.");
//                 error.statusCode = 404;
//                 throw error;
//             }

//             if (order.delivered) {
//                 const error = new Error("order is already delivered.");
//                 error.statusCode = 404;
//                 throw error;
//             }

//             order.products.pull(itemInOrder);

//             const parsedProperty = await ProductProperty.findById(
//                 itemInOrder.productSelectedPropertyId
//             );
//             if (parsedProperty) {
//                 parsedProperty.qty += itemInOrder.qty;
//                 await parsedProperty.save();
//             }

//             if (order.products && order.products.length > 0) {
//                 await order.save();
//             } else {
//                 if (loggedInUser.orders && loggedInUser.orders.includes(orderId)) {
//                     loggedInUser.orders.pull(orderId);
//                     await loggedInUser.save();
//                 }

//                 await Order.findByIdAndDelete(orderId);
//             }
//             return res.status(200).json({ message: "order canceled!" });
//         } else {
//             const error = new Error("Not authorized as you're not the buyer!");
//             error.statusCode = 403;
//             throw error;
//         }
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

// exports.cancelCompleteOrder = async(req, res, next) => {
//     try {
//         const loggedInUser = req.user;
//         const orderId = req.params.orderId;
//         const order = await Order.findById(orderId);
//         if (!order) {
//             const error = new Error("Could not find order.");
//             error.statusCode = 404;
//             throw error;
//         }

//         for (let index = 0; index < order.products.length; index++) {
//             const product = order.products[index];

//             let itemInOrder = order.products.find(
//                 (e) =>
//                 e.product.toString() === product.product.toString() &&
//                 e.productName === product.productName
//             );

//             if (!itemInOrder) {
//                 const error = new Error("Couldn't find item in order.");
//                 error.statusCode = 404;
//                 throw error;
//             }

//             if (loggedInUser._id.equals(order.orderedBy) || loggedInUser.admin) {
//                 if (order.shipped) {
//                     const error = new Error("order is already shipped.");
//                     error.statusCode = 404;
//                     throw error;
//                 }

//                 if (order.delivered) {
//                     const error = new Error("order is already delivered.");
//                     error.statusCode = 404;
//                     throw error;
//                 }

//                 order.products.pull(itemInOrder);

//                 const parsedProperty = await ProductProperty.findById(
//                     itemInOrder.productSelectedPropertyId
//                 );
//                 if (parsedProperty) {
//                     parsedProperty.qty += itemInOrder.qty;
//                     await parsedProperty.save();
//                 }

//                 if (order.products && order.products.length > 0) {
//                     await order.save();
//                 } else {
//                     if (loggedInUser.orders && loggedInUser.orders.includes(orderId)) {
//                         loggedInUser.orders.pull(orderId);
//                         await loggedInUser.save();
//                     }

//                     await Order.findByIdAndDelete(orderId);
//                 }
//             } else {
//                 const error = new Error(
//                     "Not authorized as you're not an admin or the buyer!"
//                 );
//                 error.statusCode = 403;
//                 throw error;
//             }
//         }
//         return res.status(200).json({ message: "order deleted!" });
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

// exports.getOne = async(req, res, next) => {
//     try {
//         const orderId = req.params.orderId;
//         const order = await Order.findById(orderId);
//         if (!order) {
//             const error = new Error("Could not find order.");
//             error.statusCode = 404;
//             throw error;
//         }
//         return res
//             .status(200)
//             .json({ message: "fetched successfully!", data: order });
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };