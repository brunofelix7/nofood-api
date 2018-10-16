//  Imports
require('./database');
const express = require('express');
const bodyParser = require('body-parser');
const categoryRoutes = require('../src/routes/category-routes');
const productRoutes = require('../src/routes/product-routes');

//  API do express
const app = express();

//  JSON Parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//  Rotas
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

module.exports = app;