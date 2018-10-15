const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    createdBy: String,
});

mongoose.model('Product', ProductSchema);

module.exports = mongoose.model('Product');