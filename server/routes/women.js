const express = require('express')
const router = express.Router()
const ProductModel = require('../models/product.js')

router.get('/', (req, res) =>{
    ProductModel.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router;