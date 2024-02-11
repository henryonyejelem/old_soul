const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    ID: String,
    price: Number,
    colors:[String],
    tags: String  
});

const ProductModel = mongoose.model('product', ProductSchema);
module.exports = ProductModel;