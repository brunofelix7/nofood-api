'use strict'

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category-controller');

let controller = new categoryController();

router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/:id', controller.find);
router.get('/', controller.list);

module.exports = router;

//  400 - Bad request
//  401 - Unauthorized
//  403 - Forbidden
//  404 - Not found
//  500 - Internal server error
