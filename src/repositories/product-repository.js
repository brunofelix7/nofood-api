require('../models/product-model');
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

class ProductRepository {
    
    constructor() {

    }

    /**CREATE */
    async create(data) {
        let product = new Product(data);
        return await product.save();
    }

    /**UPDATE */
    async update(id, data) {
        await Product.findByIdAndUpdate(id, { $set: data });
        return await Product.findById(id); 
    }

    /**DELETE */
    async delete(id) {
        return await Product.findByIdAndDelete(id);
    }

    /**FIND */
    async find(id) {
        return await Product.findById(id);
    }

    /**LIST */
    async list() {
        return await Product.find();
    }

}

module.exports = new ProductRepository();