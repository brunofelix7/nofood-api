//  Imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/config/variables')
const categoryRoutes = require('../src/routes/category-routes');
const productRoutes = require('../src/routes/product-routes');

//  API do express
const app = express();

//  MongoDB connection
mongoose.connect(variables.database.connect);

//  JSON Parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//  Rotas
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

module.exports = app;
