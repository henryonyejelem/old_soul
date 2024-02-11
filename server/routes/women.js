const express = require('express')
const router = express.Router()
const WomenModel = require('../models/women.js')

router.get('/', (req, res) =>{
    WomenModel.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router;