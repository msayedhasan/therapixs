const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");

// // local image upload
// const localUpload = require("./local-image-upload");
// aws s3 image upload
// const awsUpload = require("./aws-s3-upload");

module.exports = function(app) {
    app.use(cors());
    app.use(helmet());
    app.use(compression());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // app.use(localUpload.single("image"));
    // app.use(awsUpload.array("photos", 5));
    // app.use(awsUpload.single("image"));

    app.use(express.json());
};