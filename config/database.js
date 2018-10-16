const mongoose = require('mongoose');
const config = require('./config')

//  MongoDB connection
mongoose.connect(config.database.connect, { useNewUrlParser: true });