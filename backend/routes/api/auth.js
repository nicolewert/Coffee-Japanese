const express = require('express'); 
const router = express.Router()
const User = require('../../models/UserModel')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcryptjs')

// @route   POST route
// @desc    Login user and get token
// @access  Public
router.post('/login', async(req, res) =>{
    try{
        const {email, password} = req.body

        //Validate 
        if(!(email && password)){
            return res.status(400).send("All fields are required")
        }

        //Find if user exists
        const user = await User.findOne({email})
        if (user == null){
            res.status(400).send("Invalid Credentials")
        } else {
            //if user exists check passwords match
            const passwordsMatch = await bcrypt.compare(password, user.password) 
            if(!passwordsMatch){
                res.status(400).send("Invalid Credentials")
            } else{
                //If passwords match, create access token
                const token = jwt.sign({ username: user.username }, process.env.TOKEN_SECRET,{expiresIn: "3h"})
                user.token = token
                res.status(200).json({token: user.token})
            }
        }
    } catch(err){
        res.status(500).send(err)
    }
})


module.exports = router; 