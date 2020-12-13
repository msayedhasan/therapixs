const mongoose = require("mongoose");
const winston = require("winston");

const MONGODB_URI = `mongodb://localhost:27017/motobike`;
// const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ouhxh.mongodb.net/test`;
// const MONGODB_URI = `mongodb+srv://mohamedsayed:mohamedsayed@cluster0.ouhxh.mongodb.net/test`;


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