const mongoose = require("mongoose");
const winston = require("winston");
const config = require("../config/index");

//const MONGODB_URI= 'mongodb://localhost:27017/motobar';
// const MONGODB_URI= 'mongodb://localhost:27017/motobike';
//const MONGODB_URI= "mongodb://root:isQT7E4LSVH4@100.25.187.101:27017/motobar?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false"
// "mongodb://root:haU8i2xjAZyV@54.226.145.221:27017/MotoBar?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false"
// const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ouhxh.mongodb.net/test`;
// const MONGODB_URI = `mongodb+srv://mohamedsayed:mohamedsayed@cluster0.ouhxh.mongodb.net/test`;

const MONGODB_URI = `mongodb://${config.db.username}:${config.db.password}@${config.db.ip}:27017/${config.db.DB}?authSource=admin&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false`;

module.exports = () => {
  mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      winston.log(err);
    });
};
