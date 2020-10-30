const mongoose = require("mongoose");
const winston = require("winston");

const MONGODB_URI = `mongodb://localhost:27017/motobike`;
// const MONGODB_URI = `mongodb+srv://mohamedsayed:mohamedsayed@project-ygov5.mongodb.net/motobike`;

module.exports = () => {
  mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to DB')
    })
    .catch(err => {
      winston.log(err);
    });
};
