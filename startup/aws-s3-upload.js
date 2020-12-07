require("dotenv/config");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET,
    accessKeyId: process.env.AWS_ID,
    region: "us-east-1",
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
    console.log(file);
    if (
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png"
    ) {
        cb(null, true);
    } else {
        cb(new Error("Invalid Mime Type, only JPG, JPEG and PNG"), false);
    }
};

const upload = multer({
    fileFilter: fileFilter,
    storage: multerS3({
        s3: s3,
        bucket: "motobar-images",
        acl: "public-read",
        key: (req, file, cb) => {
            cb(null, Date.now().toString() + "-" + file.originalname);
        },
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });
        },
    }),
});

module.exports = upload;