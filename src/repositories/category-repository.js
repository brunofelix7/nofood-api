require('../models/category-model');
const BaseRepository = require('../../config/base/base-repository');

class CategoryRepository {
    
    constructor() {
        this._baseRepository = new BaseRepository('Category');
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

module.exports = new CategoryRepository();