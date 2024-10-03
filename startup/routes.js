const authRoutes = require("../routes/auth");

const userRoutes = require("../routes/stackholders/user");

const testRoutes = require("../routes/test");
const orderRoutes = require("../routes/order");


module.exports = function (app) {
  app.use("/auth", authRoutes);
  app.use("/user", userRoutes);

  app.use("/test", testRoutes);

  app.use("/order", orderRoutes);

  // app.get("/", (req, res, next) => {
  //     return res.send("Hello world");
  // });
};
