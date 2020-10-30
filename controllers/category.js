const Category = require("../models/category");
const Product = require("../models/product");
const User = require("../models/stackholders/user");

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
    const loggedInUser = req.user;
    if (!loggedInUser.admin && !loggedInUser.owner && !loggedInUser.manager) {
      const error = new Error(
        "Not authorized as you're not an admin, owner or manager!"
      );
      error.statusCode = 403;
      throw error;
    }

    const nameEn = JSON.parse(req.body.name).en;
    const nameAr = JSON.parse(req.body.name).ar;
    const productAttributes = JSON.parse(req.body.productAttributes);
    const imageFile = req.file;

    if (!imageFile) {
      return res.status(422).json({ message: "Attached file is not an image" });
    }

    const image = imageFile.path;

    const category = new Category({
      creator: loggedInUser._id,
      createdAt: Date.now(),
      image: image,
      name: {
        en: nameEn,
        ar: nameAr,
      },
      productAttributes: productAttributes,
      level: 0,
    });

    await category.save();

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

exports.updateOne = async (req, res, next) => {
  try {
    const loggedInUser = req.user;
    if (!loggedInUser.admin && !loggedInUser.owner && !loggedInUser.manager) {
      const error = new Error(
        "Not authorized as you're not an admin, owner or manager!"
      );
      error.statusCode = 403;
      throw error;
    }

    const nameEn = JSON.parse(req.body.name).en;
    const nameAr = JSON.parse(req.body.name).ar;
    const productAttributes = JSON.parse(req.body.productAttributes);
    const imageFile = req.file;

    const categoryId = req.params.categoryId;

    const category = await Category.findById(categoryId);

    if (!category) {
      const error = new Error("Could not find category.");
      error.statusCode = 404;
      throw error;
    }

    if (imageFile) {
      category.image = imageFile.path;
    }
    category.name.en = nameEn;
    category.name.ar = nameAr;
    category.productAttributes = productAttributes;
    category.updatedAt = Date.now();
    category.updatedBy = loggedInUser._id;
    await category.save();

    return res
      .status(200)
      .json({ message: "Category updated!", data: category });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

deleteSubCategories(categories) {

}

exports.deleteOne = async (req, res, next) => {
  const categoryId = req.params.categoryId;
  try {
    const category = await Category.findById(categoryId).populate({
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
      category.parentCategory.categories.pull(categoryId);
      await parentCategory.save();
    }

    // if it contains products delete them
    if (category.products) {
      for (let index = 0; index < category.products.length; index++) {
        await Product.findByIdAndDelete(category.products[index]);
      }
    }

    // if it contains subcategories delete them
    // if (category.categories) {
    //   const allCategories = await Category.find();
    //   let higherLevel = 0;
    //   // loop on all categories to get higher category level
    //   for (let index = 0; index < allCategories.length; index++) {
    //     if (allCategories[index].level > higherLevel) {
    //       higherLevel = allCategories[index].level;
    //     }
    //   }
    //   // loop on categories levels
    //   for (let index = 0; index < higherLevel; index++) {
    //     // filter with level = index
    //     let filteredCategories = allCategories.map((e) => e.level === index);
    //     for (let i = 0; i < filteredCategories.length; i++) {
    //       if (filteredCategories[i].parentCategory === categoryId) {
    //         await Category.findByIdAndDelete()
    //       }
    //     }
    //   }
    //   // if categories in this level parent category = category id => delete it
    // }

    if (category.categories) {
      for (let index = 0; index < category.categories.length; index++) {
        let subCategory = await Category.findById(category.categories[index]);
        if (subCategory.products) {
          for (let index = 0; index < subCategory.products.length; index++) {
            await Product.findByIdAndDelete(subCategory.products[index]);
          }
        }
        if (subCategory.categories) {
          for (let index = 0; index < subCategory.categories.length; index++) {
            await Category.findByIdAndDelete(subCategory.categories[index]);
          }
        }

        await Category.findByIdAndDelete(subCategory.categories[index]);
      }
    }

    await Category.findByIdAndDelete(categoryId);

    return res.status(200).json({ message: "Category deleted!" });
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

    const parentCategory = await Category.findById(categoryId);

    if (!parentCategory) {
      const error = new Error("Could not find category.");
      error.statusCode = 404;
      throw error;
    }

    const loggedInUser = req.user;
    if (!loggedInUser.admin) {
      const error = new Error("Not authorized as you're not an admin!");
      error.statusCode = 403;
      throw error;
    }

    if (parentCategory.products) {
      const error = new Error("parent category contains products!");
      error.statusCode = 403;
      throw error;
    }

    if (!parentCategory.categories) {
      parentCategory.categories = [];
    }

    const nameEn = JSON.parse(req.body.name).en;
    const nameAr = JSON.parse(req.body.name).ar;
    const imageFile = req.file;

    if (!imageFile) {
      return res.status(422).json({ message: "Attached file is not an image" });
    }

    const image = imageFile.path;

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
