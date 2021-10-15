"use strict";

var path = require("path");

var https = require("https");

var express = require("express");

var multer = require("multer");

var app = express();

var fs = require("fs");

var errors = require("./middleware/error");

require("./startup/logging")();

require("./startup/utils")(app);

require("./startup/routes")(app);

require("./startup/db")();

app.use(express["static"](__dirname + "/dist/admin-panel")); //if (process.env.NODE_ENV === "production") {
//set static folder
//  app.use(express.static("dist/admin-panel"));
//}

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "dist", "admin-panel", "index.html"));
});
app.use("/images", express["static"](path.join(__dirname, "images"))); // Error handling function

app.use(errors);
var port = process.env.PORT || 3000; // const port = 3000;
// const port = 443;
// const sslServer = https.createServer(
//   {
//     key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
//     cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
//   },
//   app
// );

app.listen(port, function () {
  console.log("Server connected at port ".concat(port));
}); // sslServer.listen(port, () => {
//   console.log(`ssl Server connected at port ${port}`);
// });
//# sourceMappingURL=index.dev.js.map
