const express = require('express')
const router = express.Router()
const MenModel = require('../models/men.js')

router.get('/', (req, res) =>{
    MenModel.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/:itemID', (req, res) => {
    //res.send(req.params.item);
    MenModel.findOne({ ID : req.params.itemID})
    .then(items => res.json(items))
    .catch(err => res.json(err))    
})

router.get('/continueShopping/:itemID', (req, res) => {
    //res.send(req.params.item);
    MenModel.aggregate([
        { $match: { ID: { $ne: req.params.itemID} } }, // Exclude the item
        { $sample: { size: 4 } } 
    ])
    .then(items => res.json(items))
    .catch(err => res.json(err))    
})

module.exports = router;