"use strict";

require("dotenv/config");

var mongoose = require("mongoose");

var winston = require("winston");

var config = require("../config/index");

var MONGODB_URI = 'mongodb+srv://msayed:msayed@motobar.i0mk5.mongodb.net/test'; // const MONGODB_URI = 'mongodb://localhost:27017/motobike';
// const MONGODB_URI = 'mongodb://localhost:27017/MotoBar';
//const MONGODB_URI= "mongodb://root:isQT7E4LSVH4@100.25.187.101:27017/motobar?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false"
// "mongodb://root:haU8i2xjAZyV@54.226.145.221:27017/MotoBar?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false"
// const MONGODB_URI = `mongodb://${config.db.username}:${config.db.password}@${config.db.ip}:27017/${config.db.DB}?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false`;

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
