const items = require('../services/items');

module.exports = {
    create : items.createItem,
    update : items.updateItem,
    delete : items.deleteItem,
    list   : items.getItems,
}
