'use strict'

const mongoose = require('mongoose');

class BaseRepository {
    
    constructor(model) {
        this._model = mongoose.model(model);
    }

    async create(data) {
        let model = new this._model(data);
        return await model.save();
    }

    async update(id, data) {
        await this._model.findByIdAndUpdate(id, { $set: data });
        return await this._model.findById(id); 
    }

    async delete(id) {
        return await this._model.findByIdAndDelete(id);
    }

    async find(id) {
        return await this._model.findById(id);
    }

    async list() {
        return await this._model.find();
    }

}

module.exports = BaseRepository;