'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

/**Meu model */
const category = new schema({
    //  _id: mongoose.Schema.Types.ObjectId,
    title: { trim: true, index: true, required: true, type: String },
    description: { type: String },
    photo: { type: String, required: true },
    active: { type: Boolean, required: true },
    dateCreation: { type: Date, default: Date.now }
}, { versionKey: false });

/**Antes de salvar */
category.pre('save', next => {
    let now = new Date();
    if(!this.dateCreation) {
        this.dateCreation = now;
    }
    next();
});

module.exports = mongoose.model('Category', category);