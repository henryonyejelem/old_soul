const express = require('express')
const router = express.Router()
const MenModel = require('../models/men.js')

router.get('/', (req, res) =>{
    MenModel.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router;