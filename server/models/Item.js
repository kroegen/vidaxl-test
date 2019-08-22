const mongoose = require('mongoose');
const uuidv4   = require('uuid/v4');
const Schema   = mongoose.Schema;

const ItemSchema = new Schema({
    _id: {
        type: String,
        default: uuidv4,
    },
    name: {
        type: String,
    },
    content: {
        type: String,
    },
});

module.exports = mongoose.model('ItemModel', ItemSchema);
