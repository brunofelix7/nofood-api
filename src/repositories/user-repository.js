require('../models/user-model');
const BaseRepository = require('../../config/base/base-repository');
const md5 = require('md5');

class UserRepository {
    
    constructor() {
        this._baseRepository = new BaseRepository('User');
    }

    /**AUTH */
    async authenticate(email, password) {
        let _hashPassword = md5(password);
        this._baseRepository._model.findOne({ email: email, password: _hashPassword }, 'name email _id');
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

module.exports = new UserRepository();