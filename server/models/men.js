const mongoose = require('mongoose');

const MenSchema = new mongoose.Schema({
    name: String,
    ID: String,
    price: Number,
    colors:[String],
    tags: String  
});

const MenModel = mongoose.model('mens', MenSchema);
module.exports = MenModel;