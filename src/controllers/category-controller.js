'use strict'

function categoryController() {

}

/**CREATE */
categoryController.prototype.create = async (request, response) => { 
    response.status(201).json({ message: "POST request to /api/categories" });
};

/**UPDATE */
categoryController.prototype.update = async (request, response) => { 
    response.status(202).json({ message: `PUT request to /api/categories/${request.params.id}` });
};

/**DELETE */
categoryController.prototype.delete = async (request, response) => { 
    response.status(204).json({ message: `DELETE request to /api/categories/${request.params.id}` });
};

/**FIND */
categoryController.prototype.find = async (request, response) => { 
    response.status(200).json({ message: `GET request to /api/categories/${request.params.id}` });
};

/**LIST */
categoryController.prototype.list = async (request, response) => { 
    response.status(200).json({ message: "GET request to /api/categories" });
};

module.exports = categoryController;