'use strict'

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');

let controller = new productController();

router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/:id', controller.find);
router.get('/', controller.list);

module.exports = router;
