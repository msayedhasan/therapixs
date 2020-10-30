const fs = require("fs");
const path = require("path");
const app = require("express")();
const morgan = require("morgan");

const winston = require("winston");
require("winston-mongodb");

module.exports = function () {
  winston.createLogger({
    transports: [
      new winston.transports.File({
        dirname: "./logs/",
        filename: "combined.log",
        level: "info",
      }),
      new winston.transports.File({
        dirname: "./logs/",
        filename: "errors.log",
        level: "error",
      }),
    ],
    exceptionHandlers: [
      new winston.transports.File({
        dirname: "./logs/",
        filename: "exceptions.log",
      }),
    ],
    exitOnError: false,
  });

  // morgan
  const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "..", "/", "logs", "access.log"),
    { flags: "a" } // a => new data will be appended to that file not overwrite existing file
  );
  app.use(morgan("combined", { stream: accessLogStream }));
};
