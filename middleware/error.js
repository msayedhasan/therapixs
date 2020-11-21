module.exports = (error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    console.log("data" + data);
    console.log("message" + message);
    res.status(status).json({ message: message, data: data });
};