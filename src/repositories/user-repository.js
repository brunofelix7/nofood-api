require('../models/user-model');
const BaseRepository = require('../../config/base/base-repository');
const md5 = require('md5');

class UserRepository {
    
    constructor() {
        this._baseRepository = new BaseRepository('User');
        this._projection = '_id name email';
    }

    /** AUTHENTICATION */
    async authenticate(email, password) {
        let _hashPassword = md5(password);
        this._baseRepository._model.findOne({ email: email, password: _hashPassword }, this._projection);
    }

    /**CREATE */
    async create(data) {
        let user = await this._baseRepository.create(data);
        return this._baseRepository.find(user._id, this._projection);
    }

    /**UPDATE */
    async update(id, data) {
        let user = await this._baseRepository.update(id, {
            name: data.name,
            email: data.email,
            photo: data.photo
        });
        return this._baseRepository.find(user._id, this._projection);
    }

    /**DELETE */
    async delete(id) {
        return await this._baseRepository.delete(id);
    }

    /**FIND */
    async find(id) {
        return await this._baseRepository.find(id, '_id name email photo');
    }

    /**LIST */
    async list() {
        return await this._baseRepository.list({}, this._projection);
    }

}

module.exports = new UserRepository();