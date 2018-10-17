'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String },
    active: { type: Boolean, required: true },
    dateCreation: { type: Date, default: Date.now }
}, { versionKey: false });

user.pre('save', next => {
    let now = new Date();
    if(!this.dateCreation) {
        this.dateCreation = now;
    }
    next();
});

module.exports = mongoose.model('User', user);