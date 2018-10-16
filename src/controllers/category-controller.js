'use strict'

const Category = require('../models/category-model');

function categoryController() {

}

/**CREATE */
categoryController.prototype.create = async (request, response) => {
    let category = new Category(request.body);
    let result = await category.save();
    response.status(201).json({ 
        message: "Category created successfully",
        category: result
    });
};

/**UPDATE */
categoryController.prototype.update = async (request, response) => { 
    await Category.findByIdAndUpdate(request.params.id, { $set: request.body });
    let result = await Category.findById(request.params.id); 
    response.status(202).json({ 
        message: "Category successfully updated.",
        Category:  result
    });
};

/**DELETE */
categoryController.prototype.delete = async (request, response) => { 
    await Category.findByIdAndDelete(request.params.id);
    response.status(200).json({ 
        message: `Category ${request.params.id} successfully deleted.` 
    });
};

/**FIND */
categoryController.prototype.find = async (request, response) => { 
    let result = await Category.findById(request.params.id);
    response.status(200).json(result);
};

/**LIST */
categoryController.prototype.list = async (request, response) => { 
    let categories = await Category.find();
    response.status(200).json(categories);
};

module.exports = categoryController;