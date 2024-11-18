const Test = require("../models/test");
// const Order = require("../models/order");
const User = require("../models/stackholders/user");

const schedule = require("node-schedule");

exports.buyTests = async (req, res, next) => {
    try {
        const loggedInUser = req.user;
        const cart = req.body;
        for (let index = 0; index < cart.length; index++) {
            const item = cart[index];

            if (loggedInUser.pocket) {

                let itemExist = loggedInUser.pocket.find(e => e.name === item.name && !e.parent)

                if (itemExist) {
                    itemExist.qty += item.qty;
                }
                else {

                    loggedInUser.pocket.push({ name: item.name, qty: item.qty })
                }
            } else {
                loggedInUser.pocket.push([{ name: item.name, qty: item.qty }])
            }
        }

        await loggedInUser.save()

        return res.status(201).json({
            message: "test added successfully!",
            data: loggedInUser.pocket,
        });
    } catch (err) {
        console.log(err);

        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.addTestToChild = async (req, res, next) => {
    const loggedInUser = req.user;
    const test = req.body.test;
    const qty = req.body.qty;
    const childId = req.body.child;
    try {
        if (!childId || !test) {
            return res.status(400).json({ message: "Complete data", });
        }
        if (loggedInUser._id.equals(childId)) {
            return res.status(400).json({ message: "You're adding yourself", });
        }
        if (!loggedInUser.children) {
            return res.status(400).json({ message: "No Pshycologists exist", });
        } else {
            const child = loggedInUser.children.find(e => e.user.equals(childId));
            if (!child) {
                return res.status(400).json({ message: "No pshyclogist exist", });
            }
        }
        const child = await User.findById(childId);
        if (!child) {
            return res.status(400).json({ message: "No pshyclogist exist", });
        }

        if (!loggedInUser.pocket) {
            return res.status(400).json({ message: "No Tests to assign", });
        } else {
            // find test in pocket => find children with test => subtract qty to find available
            testExist = loggedInUser.pocket.find(e => e.name === test);
            if (!testExist) {
                return res.status(400).json({ message: "No test exist", });
            }

            if (qty > testExist.qty - testExist.qtyAssigned) {
                return res.status(400).json({ message: "No enough Tests to assign", });
            } else {
                if (!child.pocket) {
                    child.pocket = [{ name: test, qty: qty, parent: loggedInUser._id }];
                    if (!testExist.qtyAssigned) { testExist.qtyAssigned = 0 }
                    testExist.qtyAssigned += qty;
                    await child.save()
                    await loggedInUser.save()
                    return res.status(200).json({ message: "Success", data: child });
                } else {
                    testFromParentExist = child.pocket.find(e => e.name === test && e.parent.equals(loggedInUser._id));
                    if (testFromParentExist) {
                        testFromParentExist.qty += qty;
                        if (!testExist.qtyAssigned) { testExist.qtyAssigned = 0 }
                        testExist.qtyAssigned += qty;
                        await child.save()
                        await loggedInUser.save()
                        return res.status(200).json({ message: "Success", data: child });
                    } else {
                        child.pocket.push({ name: test, qty: qty, parent: loggedInUser._id });
                        if (!testExist.qtyAssigned) { testExist.qtyAssigned = 0 }
                        testExist.qtyAssigned += qty;
                        await child.save()
                        await loggedInUser.save()
                        return res.status(200).json({ message: "Success", data: child });
                    }
                }
            }
        }
    } catch (err) {
        console.log(err);

        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.updateTest = async (req, res, next) => {
    try {
        const loggedInUser = req.user;
        const name = req.body.name;
        const values = req.body.values;
        const patient = req.body.patient;
        const parentId = req.body.parent;
        const testId = req.body.testId;

        if (testId) {
            const test = await Test.findById(testId);
            if (test) {
                test.patient = patient
                test.values = values
                await test.save();
                return res.status(201).json({
                    message: "test updated successfully!",
                    data: test,
                });
            } else {
                return res.status(404).json({
                    message: "test not found!",
                });
            }
        }

        const test = new Test({
            createdBy: loggedInUser._id,
            createdAt: Date.now(),
            name: name,
            values: values,
            patient: patient,
            parent: parentId,
        });

        if (loggedInUser.tests) {
            loggedInUser.tests.push(test._id);
        } else {
            loggedInUser.tests = [test._id];
        }

        // start free tests
        if (loggedInUser.pocket) {
            let itemExist = loggedInUser.pocket.find(e => e.name === name)

            if (itemExist) {
                itemExist.qty += 1;
            }
            else {
                loggedInUser.pocket.push({ name: name, qty: 1 })
            }
        } else {
            loggedInUser.pocket.push([{ name: name, qty: 1 }])
        }

        // end free tests

        // reduce available tests
        const testsExist = loggedInUser.pocket.find(e => e.name === name)
        var testExist = testsExist;
        
        if (parentId) {
            if (testsExist.length > 1) {
                testExist = testsExist.find(e => e.parent.equals(parentId))   
            }
        }

        if (testExist.qtyUsed) {
            testExist.qtyUsed += 1;

        } else {
            testExist.qtyUsed = 1;
        }

        if (parentId) {
            const parent = await User.findById(parentId);
            if (parent) {
                if (parent.tests) {
                    parent.tests.push(test._id);
                } else {
                    parent.tests = [test._id];
                }
                await parent.save();
               } else {
                return res.status(404).json({
                    message: "parent not found!",
                });
            }
        }

        await loggedInUser.save();
        await test.save();

        return res.status(201).json({
            message: "test saved successfully!",
            data: test,
        });
    } catch (err) {
        console.log(err);

        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

// exports.getOne = async (req, res, next) => {
//     const productId = req.params.productId;
//     try {
//         const product = await Product.findById(productId)
//             .populate({
//                 path: "properties",
//                 model: "productProperty",
//             })
//             .populate({
//                 path: "clinic",
//                 model: "Clinic",
//                 populate: {
//                     path: "address",
//                     model: "Place",
//                 },
//             })
//             .populate({
//                 path: "creator",
//                 model: "User",
//             });
//         if (!product) {
//             const error = new Error("Could not find product.");
//             error.statusCode = 404;
//             throw error;
//         }
//         return res.status(200).json({
//             message: "fetched successfully",
//             data: product,
//         });
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

// exports.getAll = async (req, res, next) => {
//     try {
//         const loggedInUser = req.user;
//         if (loggedInUser.doctor) {
//             let tests = await Test.find({ clinic: loggedInUser.clinic },
//             );
//             return res.status(200).json({
//                 message: "Fetched successfully",
//                 data: tests,
//             });
//         } else if (loggedInUser.owner) {
//             if (loggedInUser.clinic) {
//                 let products = await Product.find({ clinic: loggedInUser.clinic })
//                     .populate({
//                         path: "properties",
//                         model: "productProperty",
//                     })
//                     .populate({
//                         path: "clinic",
//                         model: "Clinic",
//                     })
//                     .populate({
//                         path: "creator",
//                         model: "User",
//                     });
//                 return res.status(200).json({
//                     message: "Fetched successfully",
//                     data: products,
//                 });
//             } else {
//                 return res.status(200).json({
//                     message: "Fetched successfully",
//                     data: [],
//                 });
//             }
//         } else {
//             return res.status(200).json({
//                 message: "Fetched successfully",
//                 data: [],
//             });
//         }
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

// exports.copyOne = async (req, res, next) => {
//     try {
//         const loggedInUser = req.user;
//         if (loggedInUser.admin || loggedInUser.owner) {
//             const originalProductId = req.params.productId;

//             const originalProduct = await Product.findById(originalProductId);

//             if (!originalProduct) {
//                 const error = new Error("Could not find original product.");
//                 error.statusCode = 404;
//                 throw error;
//             }

//             let newProductProperties = [];
//             let newProperties = [];

//             if (originalProduct.properties) {
//                 for (
//                     let index = 0; index < originalProduct.properties.length; index++
//                 ) {
//                     const property = originalProduct.properties[index];

//                     const originalProductProperty = await ProductProperty.findById(
//                         property
//                     );

//                     if (!originalProductProperty) {
//                         const error = new Error(
//                             "Could not find original product property."
//                         );
//                         error.statusCode = 404;
//                         throw error;
//                     }

//                     const newProperty = new ProductProperty({
//                         price: originalProductProperty.price,
//                         qty: originalProductProperty.qty,
//                         productAttributes: originalProductProperty.productAttributes,
//                     });

//                     newProperties.push(newProperty);
//                     newProductProperties.push(newProperty._id);
//                 }
//             }

//             const product = new Product({
//                 active: false,
//                 photos: originalProduct.photos,
//                 creator: loggedInUser._id,
//                 createdAt: Date.now(),
//                 name: originalProduct.name + " copy",
//                 description: originalProduct.description,
//                 category: {
//                     _id: originalProduct.category._id,
//                     en: originalProduct.category.en,
//                     ar: originalProduct.category.ar,
//                 },
//                 clinic: originalProduct.clinic,
//                 properties: newProductProperties,
//                 discountType: originalProduct.discountType,
//                 discountValue: originalProduct.discountValue,
//                 discountPercentage: originalProduct.discountPercentage,
//                 discount: originalProduct.discount,
//                 profitType: originalProduct.profitType,
//                 profitValue: originalProduct.profitValue,
//                 profitPercentage: originalProduct.profitPercentage,
//                 profit: originalProduct.profit,
//             });

//             const category = await Category.findById(originalProduct.category._id);
//             if (!category) {
//                 const error = new Error("Could not find category.");
//                 error.statusCode = 404;
//                 throw error;
//             }

//             if (originalProduct.clinic) {
//                 if (loggedInUser.owner) {
//                     const owner = await Owner.findById(loggedInUser.ownerId);
//                     if (!owner) {
//                         const error = new Error("Could not find your ownership.");
//                         error.statusCode = 404;
//                         throw error;
//                     }

//                     const clinic = await Clinic.findById(owner.clinic);
//                     if (!clinic) {
//                         const error = new Error("You're not an owner of a clinic.");
//                         error.statusCode = 403;
//                         throw error;
//                     }

//                     if (!clinic.active || clinic.locked) {
//                         const error = new Error("clinic isn't active or locked.");
//                         error.statusCode = 400;
//                         throw error;
//                     }

//                     if (!clinic.equals(originalProduct.clinic)) {
//                         const error = new Error(
//                             "You're not an owner of clinic of this product."
//                         );
//                         error.statusCode = 401;
//                         throw error;
//                     }

//                     clinic.products.push(product._id);

//                     await clinic.save();
//                 } else if (loggedInUser.admin) {
//                     const clinic = await Clinic.findById(originalProduct.clinic);
//                     if (!clinic) {
//                         const error = new Error("couldn't find the clinic.");
//                         error.statusCode = 400;
//                         throw error;
//                     }

//                     clinic.products.push(product._id);

//                     await clinic.save();
//                 }
//             }

//             //** Start save product to logged in user */
//             if (loggedInUser.products) {
//                 loggedInUser.products.push(product._id);
//             } else {
//                 loggedInUser.products = [product._id];
//             }
//             await loggedInUser.save();
//             //** End save product to logged in user */

//             category.products.push(product._id);

//             if (newProperties && newProperties.length > 0) {
//                 for (let index = 0; index < newProperties.length; index++) {
//                     await newProperties[index].save();
//                 }
//             }

//             await category.save();
//             await product.save();

//             return res.status(201).json({
//                 message: "Product copied successfully!",
//                 data: product,
//             });
//         } else {
//             const error = new Error("You're not admin or owner.");
//             error.statusCode = 401;
//             throw error;
//         }
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

// exports.updateOne = async (req, res, next) => {
//     try {
//         let photos = [];
//         for (let index = 0; index < req.files.length; index++) {
//             photos.push(req.files[index].location);
//         }

//         const loggedInUser = req.user;
//         if (!loggedInUser.admin && !loggedInUser.owner) {
//             if (req.files && req.files > 0) {
//                 // delete photos from aws
//                 for (let index = 0; index < req.files.length; index++) {
//                     await awsDelete.delete(req.files[index].location);
//                 }
//             }
//             const error = new Error("You're not admin or owner.");
//             error.statusCode = 401;
//             throw error;
//         }

//         const productId = req.params.productId;

//         const product = await Product.findById(productId);

//         if (!product) {
//             if (req.files && req.files > 0) {
//                 // delete photos from aws
//                 for (let index = 0; index < req.files.length; index++) {
//                     await awsDelete.delete(req.files[index].location);
//                 }
//             }

//             const error = new Error("Could not find product.");
//             error.statusCode = 404;
//             throw error;
//         }

//         const name = JSON.parse(req.body.name);
//         const description = JSON.parse(req.body.description);
//         const properties = JSON.parse(req.body.properties);

//         //** start updating category */
//         const categoryId = JSON.parse(req.body.category)._id;
//         const categoryEn = JSON.parse(req.body.category).name.en;
//         const categoryAr = JSON.parse(req.body.category).name.ar;

//         const category = await Category.findById(categoryId);
//         if (!category) {
//             // delete photos from aws
//             for (let index = 0; index < req.files.length; index++) {
//                 await awsDelete.delete(req.files[index].location);
//             }

//             const error = new Error("Could not find selected category.");
//             error.statusCode = 404;
//             throw error;
//         }
//         if (category.categories && category.categories.length > 0) {
//             // delete photos from aws
//             for (let index = 0; index < req.files.length; index++) {
//                 await awsDelete.delete(req.files[index].location);
//             }

//             const error = new Error("choose sub-category to add product in.");
//             error.statusCode = 400;
//             throw error;
//         }
//         //** End updating category */

//         const originalPhotos = req.body.photos;
//         product.photos = photos.concat(originalPhotos);

//         product.name = name;
//         product.description = description;
//         product.category._id = categoryId;
//         product.category.en = categoryEn;
//         product.category.ar = categoryAr;
//         product.updatedAt = Date.now();

//         if (product.properties.length > 0) {
//             for (let index = 0; index < product.properties.length; index++) {

//                 await ProductProperty.findByIdAndDelete(product.properties[index]);
//                 product.properties.pull(product.properties[index]);
//             }
//         }
//         for (let index = 0; index < properties.length; index++) {
//             const productProperty = new ProductProperty({
//                 price: properties[index].price,
//                 qty: properties[index].qty,
//                 productAttributes: properties[index].productAttributes,
//             });

//             await productProperty.save();
//             if (product.properties) {

//                 product.properties.push(productProperty._id);
//             } else {
//                 product.properties = [productProperty._id]
//             }
//         }
//         // if (product.properties.length > properties.length) {
//         //     for (let index = 0; index < product.properties.length; index++) {
//         //         let obj = properties.find(
//         //             (e) => e._id === product.properties[index].toString()
//         //         );
//         //         console.log(obj);
//         //         if (!obj) {
//         //             const prodProp = await ProductProperty.findById(
//         //                 product.properties[index]
//         //             );
//         //             if (prodProp) {
//         //                 await ProductProperty.findByIdAndDelete(prodProp);
//         //             }
//         //             product.properties.pull(product.properties[index]);
//         //         }
//         //     }
//         // }
//         // for (let index = 0; index < properties.length; index++) {
//         //     if (properties[index]._id) {
//         //         const prodProp = await ProductProperty.findById(properties[index]._id);
//         //         if (prodProp) {
//         //             prodProp.price = properties[index].price;
//         //             prodProp.qty = properties[index].qty;
//         //             prodProp.productAttributes = properties[index].productAttributes;

//         //             await prodProp.save();
//         //         }
//         //     } else {
//         //         const productProperty = new ProductProperty({
//         //             price: properties[index].price,
//         //             qty: properties[index].qty,
//         //             productAttributes: properties[index].productAttributes,
//         //         });

//         //         await productProperty.save();
//         //         product.properties.push(productProperty._id);
//         //     }
//         // }

//         if (product.clinic) {
//             //////////////////////////
//             //// if owner to add to clinic or to user
//             if (loggedInUser.owner) {
//                 const owner = await Owner.findById(loggedInUser.ownerId);

//                 if (!owner) {
//                     if (req.files && req.files > 0) {
//                         // delete photos from aws
//                         for (let index = 0; index < req.files.length; index++) {
//                             await awsDelete.delete(req.files[index].location);
//                         }
//                     }

//                     const error = new Error("Could not find your ownership.");
//                     error.statusCode = 404;
//                     throw error;
//                 }

//                 const clinic = await Clinic.findById(owner.clinic);
//                 if (!clinic) {
//                     if (req.files && req.files > 0) {
//                         // delete photos from aws
//                         for (let index = 0; index < req.files.length; index++) {
//                             await awsDelete.delete(req.files[index].location);
//                         }
//                     }

//                     const error = new Error("You're not an owner of a clinic.");
//                     error.statusCode = 404;
//                     throw error;
//                 }

//                 if (!clinic.equals(product.clinic)) {
//                     if (req.files && req.files > 0) {
//                         // delete photos from aws
//                         for (let index = 0; index < req.files.length; index++) {
//                             await awsDelete.delete(req.files[index].location);
//                         }
//                     }

//                     const error = new Error(
//                         "You're not an owner of clinic of this product."
//                     );
//                     error.statusCode = 404;
//                     throw error;
//                 }
//             } else if (!product.creator.equals(loggedInUser._id) &&
//                 !loggedInUser.admin
//             ) {
//                 // delete photos from aws
//                 for (let index = 0; index < req.files.length; index++) {
//                     await awsDelete.delete(req.files[index].location);
//                 }

//                 const error = new Error("you're not the creator of this product.");
//                 error.statusCode = 404;
//                 throw error;
//             } else if (loggedInUser.admin) { } else {
//                 const error = new Error("you're not an owner.");
//                 error.statusCode = 404;
//                 throw error;
//             }
//         }

//         await product.save();

//         return res.status(200).json({ message: "Product updated!", data: product });
//     } catch (err) {
//         if (req.files && req.files > 0) {
//             // delete photos from aws
//             for (let index = 0; index < req.files.length; index++) {
//                 awsDelete.delete(req.files[index].location);
//             }
//         }
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };


// // delete the product should delete it from any unshipped order
// exports.deleteOne = async (req, res, next) => {
//     const loggedInUser = req.user;
//     const productId = req.params.productId;
//     try {
//         const product = await Product.findById(productId);
//         if (!product) {
//             const error = new Error("Could not find product.");
//             error.statusCode = 404;
//             throw error;
//         }

//         const category = await Category.findById(product.category._id);
//         if (!category) {
//             const error = new Error("Could not find contained category.");
//             error.statusCode = 404;
//             throw error;
//         }

//         if (!product.creator.equals(loggedInUser._id) || loggedInUser.admin) {
//             if (category.products.includes(productId)) {
//                 category.products.pull(productId);
//             }

//             const creator = await User.findById(product.creator);
//             if (creator && creator.products) {
//                 if (creator.products.includes(productId)) {
//                     creator.products.pull(productId);
//                 }
//             }

//             if (product.clinic) {
//                 const clinic = await Clinic.findById(product.clinic);
//                 if (!clinic) {
//                     const error = new Error("Could not find contained clinic.");
//                     error.statusCode = 404;
//                     throw error;
//                 }

//                 if (clinic.products.includes(productId)) {
//                     clinic.products.pull(productId);
//                 }
//                 await clinic.save();
//             }
//             // delete photos from aws
//             for (let index = 0; index < product.photos.length; index++) {
//                 await awsDelete.delete(product.photos[index]);
//             }

//             for (let index = 0; index < product.properties.length; index++) {
//                 const prop = await ProductProperty.findById(product.properties[index]);
//                 if (prop) {
//                     await ProductProperty.findByIdAndDelete(product.properties[index]);
//                 }
//             }

//             if (creator) {
//                 await creator.save();
//             }

//             await category.save();

//             await Product.findByIdAndDelete(productId);
//         } else {
//             const error = new Error("Not authorized!");
//             error.statusCode = 403;
//             throw error;
//         }

//         return res.status(200).json({ message: "Product deleted!" });
//     } catch (err) {
//         console.log(err);
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

// exports.addProductToClinic = async (req, res, next) => {
//     try {
//         const loggedInUser = req.user;
//         if (loggedInUser.admin) {
//             const clinicId = req.params.clinicId;
//             const clinic = await Clinic.findById(clinicId);

//             if (!clinic) {
//                 const error = new Error("Could not find clinic.");
//                 error.statusCode = 404;
//                 throw error;
//             }

//             if (clinic.locked || !clinic.active) {
//                 const error = new Error("Clinic isn't active or locked.");
//                 error.statusCode = 404;
//                 throw error;
//             }

//             const productId = req.params.productId;
//             const product = await Product.findById(productId);

//             if (!product) {
//                 const error = new Error("Could not find product.");
//                 error.statusCode = 404;
//                 throw error;
//             }

//             if (product.clinic) {
//                 const error = new Error("This product is already in clinic.");
//                 error.statusCode = 400;
//                 throw error;
//             }

//             const discount = await Discount.findOne({
//                 $and: [{ clinic: clinicId }, { category: product.category._id }],
//             });

//             if (discount) {
//                 product.discountType = discount.discountType;
//                 product.discountValue = discount.discountValue;
//                 product.discountPercentage = discount.discountPercentage;
//                 product.discount = discount._id;
//             }

//             const profit = await Profit.findOne({
//                 $and: [{ clinic: clinic }, { category: product.category._id }],
//             });

//             if (profit) {
//                 product.profitType = profit.profitType;
//                 product.profitValue = profit.profitValue;
//                 product.profitPercentage = profit.profitPercentage;
//                 product.profit = profit._id;
//             }

//             product.clinic = clinicId;

//             await product.save();
//             clinic.products.push(product._id);
//             await clinic.save();

//             return res.status(201).json({
//                 message: "Product added successfully!",
//                 data: product,
//             });
//         } else {
//             const error = new Error("Not authorized!");
//             error.statusCode = 403;
//             throw error;
//         }
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };