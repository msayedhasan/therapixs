const Category = require("../models/category");
const Product = require("../models/product");
const User = require("../models/stackholders/user");

const awsDelete = require("../startup/aws-s3-delete");

exports.getAll = async(req, res, next) => {
    try {
        let categories = await Category.find()
            .populate({
                path: "categories",
                model: "Category",
            })
            .populate({
                path: "parentCategory",
                model: "Category",
            })
            .populate({
                path: "products",
                model: "Product",
            })
            .populate({
                path: "productAttributes",
                model: "ProductAttribute",
            });
        return res.status(200).json({
            message: "Fetched successfully",
            data: categories,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getBaseCategories = async(req, res, next) => {
    try {
        let categories = await Category.find({
                level: 0,
            })
            .populate({
                path: "categories",
                model: "Category",
            })
            .populate({
                path: "parentCategory",
                model: "Category",
            })
            .populate({
                path: "products",
                model: "Product",
            })
            .populate({
                path: "productAttributes",
                model: "ProductAttribute",
            });
        return res.status(200).json({
            message: "Fetched successfully",
            data: categories,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.getOne = async(req, res, next) => {
    const categoryId = req.params.categoryId;
    try {
        const category = await Category.findById(categoryId)
            .populate({
                path: "categories",
                model: "Category",
            })
            .populate({
                path: "parentCategory",
                model: "Category",
            })
            .populate({
                path: "products",
                model: "Product",
            })
            .populate({
                path: "productAttributes",
                model: "ProductAttribute",
            });
        if (!category) {
            const error = new Error("Could not find category.");
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({
            message: "fetched successfully",
            data: category,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.addOne = async(req, res, next) => {
    try {
        // upload image if exist
        let image = "";
        if (req.file) {
            image = req.file.location;
        }

        const loggedInUser = req.user;
        if (loggedInUser.admin) {
            const nameEn = JSON.parse(req.body.name).en;
            const nameAr = JSON.parse(req.body.name).ar;
            const productAttributes = JSON.parse(req.body.productAttributes);
            const profitType = JSON.parse(req.body.profitType);
            const profitValue = JSON.parse(req.body.profitValue);
            const profitPercentage = JSON.parse(req.body.profitPercentage);
            const discountType = JSON.parse(req.body.discountType);
            const discountValue = JSON.parse(req.body.discountValue);
            const discountPercentage = JSON.parse(req.body.discountPercentage);

            const category = new Category({
                creator: loggedInUser._id,
                createdAt: Date.now(),
                image: image,
                name: {
                    en: nameEn,
                    ar: nameAr,
                },
                productAttributes: productAttributes,
                profitType: profitType,
                profitValue: profitValue,
                profitPercentage: profitPercentage,
                discountType: discountType,
                discountValue: discountValue,
                discountPercentage: discountPercentage,
                level: 0,
            });

            await category.save();

            return res.status(201).json({
                message: "Category added successfully!",
                category: category,
            });
        } else {
            await awsDelete.delete(image);

            const error = new Error("Not authorized as you're not an admin!");
            error.statusCode = 403;
            throw error;
        }
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.updateOne = async(req, res, next) => {
    try {
        // upload image if exist
        let image = "";
        if (req.file) {
            image = req.file.location;
        }

        const loggedInUser = req.user;
        if (loggedInUser.admin) {
            const categoryId = req.params.categoryId;

            const category = await Category.findById(categoryId);

            if (!category) {
                if (req.file) {
                    await awsDelete.delete(req.file.location);
                }
                const error = new Error("Could not find category.");
                error.statusCode = 404;
                throw error;
            }

            const nameEn = JSON.parse(req.body.name).en;
            const nameAr = JSON.parse(req.body.name).ar;
            const productAttributes = JSON.parse(req.body.productAttributes);

            const profitType = JSON.parse(req.body.profitType);
            const profitValue = JSON.parse(req.body.profitValue);
            const profitPercentage = JSON.parse(req.body.profitPercentage);
            const discountType = JSON.parse(req.body.discountType);
            const discountValue = JSON.parse(req.body.discountValue);
            const discountPercentage = JSON.parse(req.body.discountPercentage);

            if (productAttributes.length > 0) {
                if (category.categories && category.categories.length > 0) {
                    if (req.file) {
                        await awsDelete.delete(req.file.location);
                    }
                    const error = new Error("add attributes to sub-category.");
                    error.statusCode = 401;
                    throw error;
                }
            }

            if (req.file) {
                category.image = image;
            }
            category.name.en = nameEn;
            category.name.ar = nameAr;
            category.productAttributes = productAttributes;

            category.profitType = profitType;
            category.profitValue = profitValue;
            category.profitPercentage = profitPercentage;

            category.discountType = discountType;
            category.discountValue = discountValue;
            category.discountPercentage = discountPercentage;

            if (category.products && category.products.length > 0) {
                for (
                    let productIndex = 0; productIndex < category.products.length; productIndex++
                ) {
                    const productId = category.products[productIndex];
                    let product = await Product.findById(productId);
                    if (product) {
                        product.profitType = profitType;
                        product.profitValue = profitValue;
                        product.profitPercentage = profitPercentage;

                        product.discountType = discountType;
                        product.discountValue = discountValue;
                        product.discountPercentage = discountPercentage;

                        await product.save();
                    }
                }
            }

            if (category.categories && category.categories.length > 0) {
                for (
                    let childIndex = 0; childIndex < category.categories.length; childIndex++
                ) {
                    const childCategoryId = category.categories[childIndex];
                    let childCategory = await Category.findById(childCategoryId);
                    if (childCategory) {
                        childCategory.profitType = profitType;
                        childCategory.profitValue = profitValue;
                        childCategory.profitPercentage = profitPercentage;

                        childCategory.discountType = discountType;
                        childCategory.discountValue = discountValue;
                        childCategory.discountPercentage = discountPercentage;

                        await childCategory.save();
                    }

                    if (childCategory.products && childCategory.products.length > 0) {
                        for (
                            let productIndex = 0; productIndex < childCategory.products.length; productIndex++
                        ) {
                            const productId = childCategory.products[productIndex];
                            let product = await Product.findById(productId);
                            if (product) {
                                product.profitType = profitType;
                                product.profitValue = profitValue;
                                product.profitPercentage = profitPercentage;

                                product.discountType = discountType;
                                product.discountValue = discountValue;
                                product.discountPercentage = discountPercentage;

                                await product.save();
                            }
                        }
                    }

                    if (childCategory.categories && childCategory.categories.length > 0) {
                        for (
                            let childIndex = 0; childIndex < childCategory.categories.length; childIndex++
                        ) {
                            const childCategoryId = childCategory.categories[childIndex];
                            let childCategory2 = await Category.findById(childCategory2Id);
                            if (childCategory2) {
                                childCategory2.profitType = profitType;
                                childCategory2.profitValue = profitValue;
                                childCategory2.profitPercentage = profitPercentage;

                                childCategory2.discountType = discountType;
                                childCategory2.discountValue = discountValue;
                                childCategory2.discountPercentage = discountPercentage;

                                await childCategory2.save();
                            }

                            if (
                                childCategory2.products &&
                                childCategory2.products.length > 0
                            ) {
                                for (
                                    let productIndex = 0; productIndex < childCategory2.products.length; productIndex++
                                ) {
                                    const productId = childCategory2.products[productIndex];
                                    let product = await Product.findById(productId);
                                    if (product) {
                                        product.profitType = profitType;
                                        product.profitValue = profitValue;
                                        product.profitPercentage = profitPercentage;

                                        product.discountType = discountType;
                                        product.discountValue = discountValue;
                                        product.discountPercentage = discountPercentage;

                                        await product.save();
                                    }
                                }
                            }
                            if (
                                childCategory2.categories &&
                                childCategory2.categories.length > 0
                            ) {
                                for (
                                    let childIndex = 0; childIndex < childCategory2.categories.length; childIndex++
                                ) {
                                    const childCategory2Id =
                                        childCategory2.categories[childIndex];
                                    let childCategory3 = await Category.findById(
                                        childCategory3Id
                                    );

                                    if (childCategory3) {
                                        childCategory3.profitType = profitType;
                                        childCategory3.profitValue = profitValue;
                                        childCategory3.profitPercentage = profitPercentage;

                                        childCategory3.discountType = discountType;
                                        childCategory3.discountValue = discountValue;
                                        childCategory3.discountPercentage = discountPercentage;

                                        await childCategory3.save();
                                    }

                                    if (
                                        childCategory3.products &&
                                        childCategory3.products.length > 0
                                    ) {
                                        for (
                                            let productIndex = 0; productIndex < childCategory3.products.length; productIndex++
                                        ) {
                                            const productId = childCategory3.products[productIndex];
                                            let product = await Product.findById(productId);
                                            if (product) {
                                                product.profitType = profitType;
                                                product.profitValue = profitValue;
                                                product.profitPercentage = profitPercentage;

                                                product.discountType = discountType;
                                                product.discountValue = discountValue;
                                                product.discountPercentage = discountPercentage;

                                                await product.save();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            category.updatedAt = Date.now();
            category.updatedBy = loggedInUser._id;
            if (category.categories) {
                category.productAttributes = [];
            }

            await category.save();

            return res
                .status(200)
                .json({ message: "Category updated!", data: category });
        } else {
            if (req.file) {
                await awsDelete.delete(req.file.location);
            }
            const error = new Error("Not authorized as you're not an admin!");
            error.statusCode = 403;
            throw error;
        }
    } catch (err) {
        if (req.file) {
            await awsDelete.delete(req.file.location);
        }
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

// // deleteSubCategories = async (categories) => {
// //   for (let index = 0; index < category.categories.length; index++) {
// //     let subCategory = await Category.findById(category.categories[index]);
// //     if (subCategory.products) {
// //       for (let index = 0; index < subCategory.products.length; index++) {
// //         await Product.findByIdAndDelete(subCategory.products[index]);
// //       }
// //     }
// //     if (subCategory.categories) {
// //       for (let index = 0; index < subCategory.categories.length; index++) {
// //         await Category.findByIdAndDelete(subCategory.categories[index]);
// //       }
// //     }

// //     await Category.findByIdAndDelete(subCategory.categories[index]);
// //   }
// // };

// // deleteSubSubCategories = async (subCategories) => {
// //   for (let index = 0; index < category.categories.length; index++) {
// //     let subCategory = await Category.findById(category.categories[index]);
// //     if (subCategory.products) {
// //       for (let index = 0; index < subCategory.products.length; index++) {
// //         await Product.findByIdAndDelete(subCategory.products[index]);
// //       }
// //     }
// //     if (subCategory.categories) {
// //       for (let index = 0; index < subCategory.categories.length; index++) {
// //         await Category.findByIdAndDelete(subCategory.categories[index]);
// //       }
// //     }

// //     await Category.findByIdAndDelete(subCategory.categories[index]);
// //   }
// // };

exports.deleteOne = async(req, res, next) => {
    const categoryId = req.params.categoryId;
    try {
        const loggedInUser = req.user;

        if (loggedInUser.admin) {
            const category = await Category.findById(categoryId)
                .populate({
                    path: "categories",
                    model: "Category",
                })
                .populate({
                    path: "parentCategory",
                    model: "Category",
                })
                .populate({
                    path: "products",
                    model: "Product",
                });
            if (!category) {
                const error = new Error("Could not find category.");
                error.statusCode = 404;
                throw error;
            }

            // if it's subcategory delete it from its parent
            if (category.parentCategory) {
                const parentCategory = await Category.findById(category.parentCategory);
                parentCategory.categories.pull(categoryId);

                await parentCategory.save();
            }

            // if it contains products delete them
            if (category.products) {
                for (let index = 0; index < category.products.length; index++) {
                    await Product.findByIdAndDelete(category.products[index]);
                }
            }

            // if it contains subcategories delete them
            if (category.categories) {
                for (let index = 0; index < category.categories.length; index++) {
                    let subCategory = await Category.findById(category.categories[index]);
                    if (subCategory.products) {
                        for (let index = 0; index < subCategory.products.length; index++) {
                            await Product.findByIdAndDelete(subCategory.products[index]);
                        }
                    }
                    if (subCategory.categories) {
                        for (
                            let index = 0; index < subCategory.categories.length; index++
                        ) {
                            let element = await Category.findById(
                                subCategory.categories[index]
                            );

                            if (element.products) {
                                for (let index = 0; index < element.products.length; index++) {
                                    await Product.findByIdAndDelete(element.products[index]);
                                }
                            }

                            if (element.categories) {
                                for (
                                    let index = 0; index < element.categories.length; index++
                                ) {
                                    await Category.findByIdAndDelete(element.categories[index]);
                                }
                            }
                            await Category.findByIdAndDelete(element._id);
                        }
                    }
                    await Category.findByIdAndDelete(subCategory._id);
                }
            }

            await Category.findByIdAndDelete(categoryId);

            return res.status(200).json({ message: "Category deleted!" });
        } else {
            const error = new Error("Not authorized.");
            error.statusCode = 404;
            throw error;
        }
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

exports.addSubCategory = async(req, res, next) => {
    try {
        const categoryId = req.params.categoryId;
        // upload image if exist
        let image = "";
        if (req.file) {
            image = req.file.location;
        }

        const parentCategory = await Category.findById(categoryId);

        if (!parentCategory) {
            // delete photos from aws
            await awsDelete.delete(image);

            const error = new Error("Could not find category.");
            error.statusCode = 404;
            throw error;
        }

        const loggedInUser = req.user;
        if (!loggedInUser.admin) {
            await awsDelete.delete(image);

            const error = new Error("Not authorized as you're not an admin!");
            error.statusCode = 403;
            throw error;
        }

        if (parentCategory.products) {
            await awsDelete.delete(image);

            const error = new Error("parent category contains products!");
            error.statusCode = 403;
            throw error;
        }

        if (!parentCategory.categories) {
            parentCategory.categories = [];
        }

        const nameEn = JSON.parse(req.body.name).en;
        const nameAr = JSON.parse(req.body.name).ar;

        let profitType = JSON.parse(req.body.profitType);
        let profitValue = JSON.parse(req.body.profitValue);
        let profitPercentage = JSON.parse(req.body.profitPercentage);
        let discountType = JSON.parse(req.body.discountType);
        let discountValue = JSON.parse(req.body.discountValue);
        let discountPercentage = JSON.parse(req.body.discountPercentage);

        if (profitType === "") {
            profitType = parentCategory.profitType;
            profitValue = parentCategory.profitValue;
            profitPercentage = parentCategory.profitPercentage;
        }

        if (discountType === "") {
            discountType = parentCategory.discountType;
            discountValue = parentCategory.discountValue;
            discountPercentage = parentCategory.discountPercentage;
        }

        const category = new Category({
            creator: loggedInUser._id,
            createdAt: Date.now(),
            image: image,
            name: {
                en: nameEn,
                ar: nameAr,
            },
            level: parentCategory.level + 1,
            parentCategory: parentCategory._id,

            profitType: profitType,
            profitValue: profitValue,
            profitPercentage: profitPercentage,
            discountType: discountType,
            discountValue: discountValue,
            discountPercentage: discountPercentage,
        });

        await category.save();

        parentCategory.categories.push(category);
        parentCategory.productAttributes = [];
        await parentCategory.save();

        return res.status(201).json({
            message: "Category added successfully!",
            category: category,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

/////////////// Mobile API //////////////
exports.getCategoryActivatedProducts = async(req, res, next) => {
    const categoryId = req.params.categoryId;
    try {
        const category = await Category.findById(categoryId)
            .populate({
                path: "categories",
                model: "Category",
            })
            .populate({
                path: "parentCategory",
                model: "Category",
            })
            .populate({
                path: "products",
                model: "Product",
                populate: {
                    path: "store",
                    model: "Store",
                    populate: {
                        path: "address",
                        model: "Place",
                    },
                },
            })
            .populate({
                path: "productAttributes",
                model: "ProductAttribute",
            })
            .populate({
                path: "creator",
                model: "User",
                // populate: { path: "address", model: "Place" },
            });
        if (!category) {
            const error = new Error("Could not find category.");
            error.statusCode = 404;
            throw error;
        }

        if (category.products && category.products.length > 0) {
            category.products = category.products.filter((e) => e.active);
        }
        return res.status(200).json({
            message: "fetched successfully",
            data: category,
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};