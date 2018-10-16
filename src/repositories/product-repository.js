require('../models/product-model');
const BaseRepository = require('../../config/base/base-repository');

class ProductRepository {
    
    constructor() {
        this._baseRepository = new BaseRepository('Product');
    }

    /**CREATE */
    async create(data) {
        return await this._baseRepository.create(data);
    }

    /**UPDATE */
    async update(id, data) {
        return await this._baseRepository.update(id, data);
    }

    /**DELETE */
    async delete(id) {
        return await this._baseRepository.delete(id);
    }

    /**FIND */
    async find(id) {
        return await this._baseRepository.find(id);
    }

    /**LIST */
    async list() {
        return await this._baseRepository.list();
    }

}

module.exports = new ProductRepository();