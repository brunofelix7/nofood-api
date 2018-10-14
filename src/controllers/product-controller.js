'use strict'

function productController() {

}

/**CREATE */
productController.prototype.create = async (request, response) => { 
    response.status(201).json({ message: "POST request to /api/products" });
};

/**UPDATE */
productController.prototype.update = async (request, response) => { 
    response.status(202).json({ message: `PUT request to /api/products/${request.params.id}` });
};

/**DELETE */
productController.prototype.delete = async (request, response) => { 
    response.status(204).json({ message: `DELETE request to /api/products/${request.params.id}` });
};

/**FIND */
productController.prototype.find = async (request, response) => { 
    response.status(200).json({ message: `GET request to /api/products/${request.params.id}` });
};

/**LIST */
productController.prototype.list = async (request, response) => { 
    response.status(200).json({ message: "GET request to /api/products" });
};

module.exports = productController;