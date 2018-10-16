'use strict'

const repository = require('../repositories/product-repository');

class ProductController {

    constructor() {

    }    

    /**POST api/products */
    async create (request, response) {
        let result = await repository.create(request.body);
        return response.status(201).json({
            message: "Product created successfully",
            product: result
        });
    };

    /**PUT api/products/{id} */
    async update (request, response) {
        let result = await repository.update(request.params.id, request.body);
        return response.status(202).json({
            message: "Product successfully updated.",
            product: result
        });
    };

    /**DELETE api/products/{id} */
    async delete (request, response) {
        let result = await repository.delete(request.params.id);
        return response.status(200).json({
            message: `Product ${request.params.id} successfully deleted.`,
            product: result
        });
    };

    /**GET api/products/{id} */
    async find (request, response) {
        let result = await repository.find(request.params.id);
        return response.status(200).json(result);
    };

    /**GET api/products */
    async list (request, response) {
        let result = await repository.list();
        return response.status(200).json(result);
    };

}

module.exports = new ProductController();