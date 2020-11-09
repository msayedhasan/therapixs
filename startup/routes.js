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

const orderRoutes = require("../routes/order");

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

  app.use("/order", orderRoutes);

  // app.get("/", (req, res, next) => {
  //   return res.send("Hello world");
  // });
};
