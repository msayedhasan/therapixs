require("dotenv/config");
const mongoose = require("mongoose");
const winston = require("winston");
const config = require("../config/index");

const MONGODB_URI = 'mongodb+srv://msayed:msayed@motobar.i0mk5.mongodb.net/test';
// const MONGODB_URI = 'mongodb://localhost:27017/MotoBar';

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