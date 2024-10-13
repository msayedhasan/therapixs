require("dotenv/config");
const mongoose = require("mongoose");
const winston = require("winston");
const config = require("../config/index");

// const MONGODB_URI = 'mongodb://localhost:27017/Therapy';
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB}.i0mk5.mongodb.net/`;

module.exports = () => {
    mongoose
        .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to DB");
        })
        .catch((err) => {
            console.log(err);
            winston.log(err);
        });
};