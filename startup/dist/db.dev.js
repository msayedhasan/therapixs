"use strict";

require("dotenv/config");

var mongoose = require("mongoose");

var winston = require("winston");

var config = require("../config/index"); // const MONGODB_URI = 'mongodb+srv://msayed:msayed@motobar.i0mk5.mongodb.net/test';


var MONGODB_URI = 'mongodb://localhost:27017/MotoBar';

module.exports = function () {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(function () {
    console.log("Connected to DB");
  })["catch"](function (err) {
    console.log(err);
    winston.log(err);
  });
};
//# sourceMappingURL=db.dev.js.map
