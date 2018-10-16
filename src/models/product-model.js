'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const product = new schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    photo: { type: String, required: true },
    active: { type: Boolean, required: true },
    dateCreation: { type: Date, default: Date.now }
}, { versionKey: false });

category.pre('save', next => {
    let now = new Date();
    if(!this.dateCreation) {
        this.dateCreation = now;
    }
    next();
});

module.exports = mongoose.model('Product', product);