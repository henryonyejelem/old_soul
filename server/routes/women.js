const express = require('express')
const router = express.Router()
const WomenModel = require('../models/women.js')

router.get('/', (req, res) =>{
    WomenModel.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/:itemID', (req, res) => {
    //res.send(req.params.item);
    WomenModel.findOne({ ID : req.params.itemID})
    .then(items => res.json(items))
    .catch(err => res.json(err))    
})

router.get('/continueShopping/:itemID', (req, res) => {
    //res.send(req.params.item);
    WomenModel.aggregate([
        { $match: { ID: { $ne: req.params.itemID} } }, // Exclude the item
        { $sample: { size: 4 } } 
    ])
    .then(items => res.json(items))
    .catch(err => res.json(err))    
})


module.exports = router;