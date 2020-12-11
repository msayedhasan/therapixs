const Discount = require("../models/discount");
const Profit = require("../models/profit");
const Category = require("../models/category");
const Product = require("../models/product");
const Store = require("../models/store");
const User = require("../models/stackholders/user");

const awsDelete = require("../startup/aws-s3-delete");

exports.getAll = async (req, res, next) => {
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
        populate: {
          path: "properties",
          model: "productProperty",
        },
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

exports.getBaseCategories = async (req, res, next) => {
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
        populate: {
          path: "properties",
          model: "productProperty",
        },
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

exports.getOne = async (req, res, next) => {
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
          path: "properties",
          model: "productProperty",
        },
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

exports.addOne = async (req, res, next) => {
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

exports.updateOne = async (req, res, next) => {
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

      category.updatedAt = Date.now();
      category.updatedBy = loggedInUser._id;
      if (category.categories && category.categories.length > 0) {
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

exports.deleteOne = async (req, res, next) => {
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
          populate: {
            path: "properties",
            model: "productProperty",
          },
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
              let index = 0;
              index < subCategory.categories.length;
              index++
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
                  let index = 0;
                  index < element.categories.length;
                  index++
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

exports.addSubCategory = async (req, res, next) => {
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

exports.addDiscount = async (req, res, next) => {
  try {
    const loggedInUser = req.user;

    const categoryId = req.params.categoryId;
    const category = await Category.findById(categoryId);
    if (!category) {
      const error = new Error("Could not find category.");
      error.statusCode = 404;
      throw error;
    }

    const storeId = req.body.storeId;
    let store;
    if (storeId) {
      store = await Store.findById(storeId);

      if (!store) {
        const error = new Error("Could not find store.");
        error.statusCode = 404;
        throw error;
      }
    }
    const discountType = req.body.discountType;
    const discountValue = req.body.discountValue;
    const discountPercentage = req.body.discountPercentage;
    const validTill = req.body.validTill;

    if (
      discountType === "" ||
      (discountValue === 0 && discountPercentage === 0)
    ) {
      const error = new Error("No discount to add.");
      error.statusCode = 400;
      throw error;
    }

    if (loggedInUser.admin) {
      const discount = new Discount({
        discountOn: "category",
        store: storeId,
        category: categoryId,
        discountType: discountType,
        discountValue: discountValue,
        discountPercentage: discountPercentage,
        creator: loggedInUser._id,
        createdAt: Date.now(),
        validTill: validTill,
      });
      await discount.save();

      if (!store) {
        if (category.products && category.products.length > 0) {
          for (let index = 0; index < category.products.length; index++) {
            const productId = category.products[index];
            let product = await Product.findById(productId);
            if (product) {
              product.discountType = discountType;
              product.discountValue = discountValue;
              product.discountPercentage = discountPercentage;
              product.discount = discount._id;

              await product.save();
            }
          }
        }
      } else {
        if (store.products && store.products.length > 0) {
          for (
            let prodIndex = 0;
            prodIndex < store.products.length;
            prodIndex++
          ) {
            const product = await Product.findById(store.products[prodIndex]);
            if (product) {
              if (product.category._id === categoryId.toString()) {
                product.discountType = discountType;
                product.discountValue = discountValue;
                product.discountPercentage = discountPercentage;
                product.discount = discount._id;

                await product.save();
              }
            }
          }
        }
      }

      return res.status(201).json({
        message: "Category discount added successfully!",
        data: store,
      });
    } else if (loggedInUser.owner) {
      if (!store) {
        const error = new Error("Could not find store.");
        error.statusCode = 404;
        throw error;
      }
      if (store.owners.includes(loggedInUser.ownerId)) {
        const discount = new Discount({
          discountOn: "category",
          store: storeId,
          discountType: discountType,
          discountValue: discountValue,
          discountPercentage: discountPercentage,
          creator: loggedInUser._id,
          createdAt: Date.now(),
          validTill: validTill,
        });
        await discount.save();

        if (store.products && store.products.length > 0) {
          for (
            let prodIndex = 0;
            prodIndex < store.products.length;
            prodIndex++
          ) {
            const product = await Product.findById(store.products[prodIndex]);
            if (product) {
              if (product.category._id === categoryId.toString()) {
                product.discountType = discountType;
                product.discountValue = discountValue;
                product.discountPercentage = discountPercentage;
                product.discount = discount._id;

                await product.save();
              }
            }
          }
        }

        return res.status(201).json({
          message: "Category discount added successfully!",
          data: store,
        });
      } else {
        const error = new Error(
          "Not authorized as you're not an owner of this store!"
        );
        error.statusCode = 403;
        throw error;
      }
    } else {
      const error = new Error("Not authorized!");
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

exports.addProfit = async (req, res, next) => {
  try {
    const loggedInUser = req.user;

    const categoryId = req.params.categoryId;
    const category = await Category.findById(categoryId);
    if (!category) {
      const error = new Error("Could not find category.");
      error.statusCode = 404;
      throw error;
    }

    const storeId = req.body.storeId;
    let store;
    if (storeId) {
      store = await Store.findById(storeId);

      if (!store) {
        const error = new Error("Could not find store.");
        error.statusCode = 404;
        throw error;
      }
    }
    const profitType = req.body.profitType;
    const profitValue = req.body.profitValue;
    const profitPercentage = req.body.profitPercentage;
    const validTill = req.body.validTill;

    if (profitType === "" || (profitValue === 0 && profitPercentage === 0)) {
      const error = new Error("No profit to add.");
      error.statusCode = 400;
      throw error;
    }

    if (loggedInUser.admin) {
      const profit = new Profit({
        profitOn: "category",
        store: storeId,
        category: categoryId,
        profitType: profitType,
        profitValue: profitValue,
        profitPercentage: profitPercentage,
        creator: loggedInUser._id,
        createdAt: Date.now(),
        validTill: validTill,
      });
      await profit.save();

      if (!store) {
        if (category.products && category.products.length > 0) {
          for (let index = 0; index < category.products.length; index++) {
            const productId = category.products[index];
            let product = await Product.findById(productId);
            if (product) {
              product.profitType = profitType;
              product.profitValue = profitValue;
              product.profitPercentage = profitPercentage;
              product.profit = profit._id;

              await product.save();
            }
          }
        }
      } else {
        if (store.products && store.products.length > 0) {
          for (
            let prodIndex = 0;
            prodIndex < store.products.length;
            prodIndex++
          ) {
            const product = await Product.findById(store.products[prodIndex]);
            if (product) {
              if (product.category._id === categoryId.toString()) {
                product.profitType = profitType;
                product.profitValue = profitValue;
                product.profitPercentage = profitPercentage;
                product.profit = profit._id;

                await product.save();
              }
            }
          }
        }
      }

      return res.status(201).json({
        message: "Category profit added successfully!",
        data: store,
      });
    } else if (loggedInUser.owner) {
      if (!store) {
        const error = new Error("Could not find store.");
        error.statusCode = 404;
        throw error;
      }
      if (store.owners.includes(loggedInUser.ownerId)) {
        const profit = new Profit({
          profitOn: "category",
          store: storeId,
          profitType: profitType,
          profitValue: profitValue,
          profitPercentage: profitPercentage,
          creator: loggedInUser._id,
          createdAt: Date.now(),
          validTill: validTill,
        });
        await profit.save();

        if (store.products && store.products.length > 0) {
          for (
            let prodIndex = 0;
            prodIndex < store.products.length;
            prodIndex++
          ) {
            const product = await Product.findById(store.products[prodIndex]);
            if (product) {
              if (product.category._id === categoryId.toString()) {
                product.profitType = profitType;
                product.profitValue = profitValue;
                product.profitPercentage = profitPercentage;
                product.profit = profit._id;

                await product.save();
              }
            }
          }
        }

        return res.status(201).json({
          message: "Category profit added successfully!",
          data: store,
        });
      } else {
        const error = new Error(
          "Not authorized as you're not an owner of this store!"
        );
        error.statusCode = 403;
        throw error;
      }
    } else {
      const error = new Error("Not authorized!");
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

// Mobile API //////////////
exports.getCategoryActivatedProducts = async (req, res, next) => {
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
        path: "products",
        model: "Product",
        populate: {
          path: "creator",
          model: "User",
        },
      })
      .populate({
        path: "products",
        model: "Product",
        populate: { path: "properties", model: "productProperty" },
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
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
