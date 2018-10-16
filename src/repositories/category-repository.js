require('../models/category-model');
const mongoose = require('mongoose');
const Category = mongoose.model('Category');

class CategoriaRepository {
    
    constructor() {

    }

    /**CREATE */
    async create(data) {
        let category = new Category(data);
        return await category.save();
    }

    /**UPDATE */
    async update(id, data) {
        await Category.findByIdAndUpdate(id, { $set: data });
        return await Category.findById(id); 
    }

    /**DELETE */
    async delete(id) {
        return await Category.findByIdAndDelete(id);
    }

    /**FIND */
    async find(id) {
        return await Category.findById(id);
    }

    /**LIST */
    async list() {
        return await Category.find();
    }

}

module.exports = new CategoriaRepository();