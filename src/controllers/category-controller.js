'use strict'

const repository = require('../repositories/category-repository');

function categoryController() {

}

/**POST api/categories */
categoryController.prototype.create = async (request, response) => {
    let result = await repository.create(request.body);
    response.status(201).json({ 
        message: "Category created successfully",
        category: result
    });
};

/**PUT api/categories/{id} */
categoryController.prototype.update = async (request, response) => { 
    let result = await repository.update(request.params.id, request.body);
    response.status(202).json({ 
        message: "Category successfully updated.",
        category: result
    });
};

/**DELETE api/categories/{id} */
categoryController.prototype.delete = async (request, response) => { 
    let result = await repository.delete(request.params.id);
    response.status(200).json({ 
        message: `Category ${request.params.id} successfully deleted.`,
        category: result
    });
};

/**GET api/categories/{id} */
categoryController.prototype.find = async (request, response) => { 
    let result = await repository.find(request.params.id);
    response.status(200).json(result);
};

/**GET api/categories */
categoryController.prototype.list = async (request, response) => { 
    let result = await repository.list();
    response.status(200).json(result);
};

module.exports = categoryController;