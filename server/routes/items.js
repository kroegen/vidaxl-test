const express  = require('express');
const items    = express.Router();

const itemsController = require('../controllers/items');

items.get('/',       itemsController.list);
items.post('/',      itemsController.create);
items.delete('/:id', itemsController.delete);
items.put('/:id',    itemsController.update);

module.exports = items;
