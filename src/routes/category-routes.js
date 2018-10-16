'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/category-controller');

router.post('/', (request, response) => controller.create(request, response));
router.put('/:id', (request, response) => controller.update(request, response));
router.delete('/:id', (request, response) => controller.delete(request, response));
router.get('/:id', (request, response) => controller.find(request, response));
router.get('/', (request, response) => controller.list(request, response));

module.exports = router;

//  400 - Bad request
//  401 - Unauthorized
//  403 - Forbidden
//  404 - Not found
//  500 - Internal server error
