'use strict'

const repository = require('../repositories/category-repository');

class CategoryController {

    constructor() {

    }    

    /**POST api/categories */
    async create (request, response) {
        let result = await repository.create(request.body);
        return response.status(201).json({
            message: "Category created successfully",
            category: result
        });
    };

    /**PUT api/categories/{id} */
    async update (request, response) {
        let result = await repository.update(request.params.id, request.body);
        return response.status(202).json({
            message: "Category successfully updated.",
            category: result
        });
    };

    /**DELETE api/categories/{id} */
    async delete (request, response) {
        let result = await repository.delete(request.params.id);
        return response.status(200).json({
            message: `Category ${request.params.id} successfully deleted.`
        });
    };

    /**GET api/categories/{id} */
    async find (request, response) {
        let result = await repository.find(request.params.id);
        return response.status(200).json(result);
    };

    /**GET api/categories */
    async list (request, response) {
        let result = await repository.list();
        return response.status(200).json(result);
    };

}

module.exports = new CategoryController();