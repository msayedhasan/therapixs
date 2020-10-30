const authRoutes = require("../routes/auth");

const userRoutes = require("../routes/stackholders/user");
const adminRoutes = require("../routes/stackholders/admin");
const ownerRoutes = require("../routes/stackholders/owner");

const categoryRoutes = require("../routes/category");
const feedRoutes = require("../routes/feed");
const productAttributeRoutes = require("../routes/product-attribute");

const storeRoutes = require("../routes/store");
const branchRoutes = require("../routes/branch");
const productRoutes = require("../routes/product");

module.exports = function (app) {
  app.use("/auth", authRoutes);
  app.use("/user", userRoutes);
  app.use("/admin", adminRoutes);
  app.use("/owner", ownerRoutes);

  app.use("/category", categoryRoutes);
  app.use("/feed", feedRoutes);
  app.use("/product-attribute", productAttributeRoutes);

  app.use("/store", storeRoutes);
  app.use("/branch", branchRoutes);
  app.use("/product", productRoutes);

  // app.get("/", (req, res, next) => {
  //   return res.send("Hello world");
  // });
};
