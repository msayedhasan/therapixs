const path = require("path");
const https = require("https");
const express = require("express");
const multer = require("multer");
const app = express();
const fs = require("fs");

const errors = require("./middleware/error");
require("./startup/logging")();
require("./startup/utils")(app);
require("./startup/routes")(app);
require("./startup/db")();

// app.use(express.static(__dirname + "/dist/admin-panel"));
app.use(express.static(__dirname + "/dist"));
// //if (process.env.NODE_ENV === "production") {
// //set static folder
// //  app.use(express.static("dist/admin-panel"));
// //}
// // app.get("*", (req, res) => {
// //   res.sendFile(path.resolve(__dirname, "dist", "admin-panel", "index.html"));
// // });

app.use("/images", express.static(path.join(__dirname, "images")));
// Error handling function
app.use(errors);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server connected at port ${port}`);
});