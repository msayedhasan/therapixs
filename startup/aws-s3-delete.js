require("dotenv/config");
const aws = require("aws-sdk");

const s3 = new aws.S3({
    secretAccessKey: process.env.AWS_SECRET,
    accessKeyId: process.env.AWS_ID,
});

exports.delete = (fileUrl) => {
    const params = {
        Bucket: "motobar-images",
        Key: fileUrl.split("amazonaws.com/")[1].replace(/%20/g, " "),
    };
    s3.deleteObject(params, function(err, data) {
        if (err) {
            console.log(err);
        }
        console.log(data);
    });
};