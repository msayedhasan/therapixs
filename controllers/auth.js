const { JWT_SECRET } = require("../config/index");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/stackholders/user");

setToken = (user) => {
    return jwt.sign({
            iat: new Date().getTime(),
            userId: user._id.toString(),
        },
        JWT_SECRET
        // { expiresIn: "1h" }
    );
};

exports.signup = async(req, res, next) => {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const address = req.body.address;
    const fcmToken = req.body.fcmToken;
    hashedPassword = await bcrypt.hash(password, 12);
    try {
        // check if user logged in with phone or local email
        let user = await User.findOne({
            phone: phone,
        });
        if (user) {
            const error = new Error("user email or phone existed");
            error.statusCode = 401;
            throw error;
        }

        // // check if user logged in with existing mail via facebook or google
        // let socialMediaUser = await User.findOne({
        //     $or: [{ "google.email": email }, { "facebook.email": email }],
        // });
        // if (socialMediaUser) {
        //     socialMediaUser.phone = phone;
        //     socialMediaUser.methods.push("local");
        //     socialMediaUser.local = {
        //         email: email,
        //         password: hashedPassword,
        //     };
        //     await socialMediaUser.save();

        //     const token = setToken(socialMediaUser);
        //     return res.status(201).json({
        //         message: "Success",
        //         token: token,
        //     });
        // }

        const newUser = new User({
            name: name,
            phone: phone,
            methods: ["phone"],
            local: {
                phone: phone,
                password: hashedPassword,
            },
            address: address,
            fcmToken: fcmToken,
        });

        await newUser.save();

        const token = setToken(newUser);
        return res.status(201).json({
            message: "Success",
            token: token,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.login = async(req, res, next) => {
    // const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    try {
        const user = await User.findOne({ phone: phone });
        if (!user) {
            const error = new Error("user not found");
            error.statusCode = 401;
            throw error;
        }
        // const user = await User.findOne({ "local.email": email });
        // if (!user) {
        //   const error = new Error("user not found");
        //   error.statusCode = 401;
        //   throw error;
        // }
        isEqual = await bcrypt.compare(password, user.local.password);
        if (!isEqual) {
            const error = new Error("Wrong password");
            error.statusCode = 401;
            throw error;
        }

        const token = setToken(user);
        return res.status(200).json({
            message: "Logged in successfully",
            admin: user.admin,
            owner: user.owner,
            token: token,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.google = async(req, res, next) => {
    // const email = req.body.email;
    const id = req.body.id;
    const email = req.body.email;
    const name = req.body.name;
    try {
        let existingGoogleUser = await User.findOne({
            "google.id": id,
        });
        if (existingGoogleUser) {
            const token = setToken(existingGoogleUser);
            return res.status(200).json({
                message: "Logged in successfully",
                admin: existingGoogleUser.admin,
                owner: existingGoogleUser.owner,
                token: token,
            });
        }
        const existingUser = await User.findOne({
            $or: [{ "local.email": email }, { "facebook.email": email }],
        });
        if (existingUser) {
            // We want to merge google's data with local auth
            existingUser.methods.push("google");
            existingUser.google = {
                id: id,
                email: email,
            };
            await existingUser.save();
            const token = setToken(existingUser);
            return res.status(200).json({
                message: "Logged in successfully",
                admin: existingUser.admin,
                owner: existingUser.owner,
                token: token,
            });
        }

        const newUser = new User({
            name: name,
            methods: ["google"],
            google: {
                id: id,
                email: email,
            },
        });

        await newUser.save();
        const token = setToken(newUser);
        return res.status(200).json({
            message: "Logged in successfully",
            admin: newUser.admin,
            owner: newUser.owner,
            token: token,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getProfile = async(req, res, next) => {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        const error = new Error("Not Authenticated.");
        error.statusCode = 401;
        throw error;
    }
    const token = authHeader.split(" ")[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, JWT_SECRET);
    } catch (err) {
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken) {
        const error = new Error("Not Authenticated.");
        error.statusCode = 401;
        throw error;
    }
    try {
        let user = await User.findById(decodedToken.userId)
            .populate({
                path: "ownerId",
                model: "Owner",
                populate: {
                    path: "store",
                    model: "Store",
                },
            })
            .populate({
                path: "shipperId",
                model: "Shipper",
            })
            .populate({
                path: "leaderId",
                model: "Leader",
                populate: {
                    path: "group",
                    model: "Group",
                },
            })
            .populate({
                path: "products",
                model: "Product",
            })
            .populate({
                path: "orders",
                model: "Order",
            })
            .populate({
                path: "soldOrders",
                model: "Order",
            });
        if (!user) {
            const error = new Error("Could not find user.");
            error.statusCode = 404;
            throw error;
        }

        return res.status(200).json({ message: "Profile fetched.", data: user });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.facebookOAuth = async(req, res, next) => {
    try {
        const token = setToken(req.user);
        res.status(201).json({
            message: "Success",
            user: req.user,
            token: token,
        });
    } catch (err) {
        // use express to return error
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err); // sends err to the error handling message in app.js
    }
};

exports.googleOAuth = async(req, res, next) => {
    try {
        const token = setToken(req.user);
        res.status(201).json({
            message: "Success",
            user: req.user,
            token: token,
        });
    } catch (err) {
        // use express to return error
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err); // sends err to the error handling message in app.js
    }
};