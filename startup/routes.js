const authRoutes = require("../routes/auth");

const userRoutes = require("../routes/stackholders/user");

const categoryRoutes = require("../routes/category");
const productAttributeRoutes = require("../routes/product-attribute");

const leaderRoutes = require("../routes/stackholders/leader");
const groupRoutes = require("../routes/group");
const eventRoutes = require("../routes/event");

const ownerRoutes = require("../routes/stackholders/owner");
const storeRoutes = require("../routes/store");
const productRoutes = require("../routes/product");

const shipperRoutes = require("../routes/stackholders/shipper");
const placeRoutes = require("../routes/place");
const shippingRoutes = require("../routes/shipping");
const orderRoutes = require("../routes/order");

const sliderRoutes = require("../routes/slider");
const adsRoutes = require("../routes/ad");

const discountsRoutes = require("../routes/discount");
const profitsRoutes = require("../routes/profit");

const notificationsRoutes = require("../routes/notification");


module.exports = function (app) {
  app.use("/auth", authRoutes);
  app.use("/user", userRoutes);

  app.use("/category", categoryRoutes);
  app.use("/product-attribute", productAttributeRoutes);

  app.use("/leader", leaderRoutes);
  app.use("/group", groupRoutes);
  app.use("/event", eventRoutes);

  app.use("/owner", ownerRoutes);
  app.use("/store", storeRoutes);
  app.use("/product", productRoutes);

  app.use("/shipper", shipperRoutes);
  app.use("/place", placeRoutes);
  app.use("/shipping", shippingRoutes);
  app.use("/order", orderRoutes);

  app.use("/ads", adsRoutes);
  app.use("/slider", sliderRoutes);

  app.use("/discount", discountsRoutes);
  app.use("/profit", profitsRoutes);

  app.use("/notification", notificationsRoutes);

  // app.get("/", (req, res, next) => {
  //     return res.send("Hello world");
  // });
};
