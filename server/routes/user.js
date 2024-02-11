const express = require('express')
const router = express.Router()
const UserModel = require('../models/User.js')

router.get('/', (req, res) => {
    res.sendStatus(200)
})

router.post('/signin', (req, res) => { 
    const {email, password} = req.body;       
    UserModel.findOne({email : email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.send(true);
                console.log("Successful Signin");
            }
            else{
                res.send(false);
                console.log("Failed Signin: Wrong Password");
                console.log(req.body)
            }
        }
        else{
            res.send(false);
            console.log("Failed Signin: User doesnt Exist");
            console.log(req.body)
        }
    })    
})

router.post('/signup', (req, res) => {
    console.log('Creating User: ')
    console.log(req.body)    
    UserModel.create(req.body)

    res.send(true)    
})

module.exports = router;