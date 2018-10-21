'use strict'

const repository = require('../repositories/user-repository');
const validation = require('../../config/validation/validation');

class UserController {

    constructor() {

    }    

    /**POST api/users */
    async create (request, response) {
        let result = await repository.create(request.body);
        return response.status(201).json({
            message: "User created successfully",
            category: result
        });
    };

    /**PUT api/users/{id} */
    async update (request, response) {
        let result = await repository.update(request.params.id, request.body);
        return response.status(202).json({
            message: "User successfully updated.",
            category: result
        });
    };

    /**DELETE api/users/{id} */
    async delete (request, response) {
        let result = await repository.delete(request.params.id);
        return response.status(200).json({
            message: `User ${request.params.id} successfully deleted.`
        });
    };

    /**GET api/users/{id} */
    async find (request, response) {
        let result = await repository.find(request.params.id);
        return response.status(200).json(result);
    };

    /**GET api/users */
    async list (request, response) {
        let result = await repository.list();
        return response.status(200).json(result);
    };

}

module.exports = new UserController();