const express = require('express')
const router = express.Router()
const User = require('../models/UserModel')

router.post('/Register', (req, res) => {
    const user = new User({
        username: req.body.username, 
        email: req.body.email,
        password: req.body.password,
        rpassword: req.body.rpassword
    })
    user.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        res.json(error)
    })
})

module.exports = router