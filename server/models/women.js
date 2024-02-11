const mongoose = require('mongoose');

const WomenSchema = new mongoose.Schema({
    name: String,
    ID: String,
    price: Number,
    colors:[String],
    tags: String  
});

const WomenModel = mongoose.model('womens', WomenSchema);
module.exports = WomenModel;