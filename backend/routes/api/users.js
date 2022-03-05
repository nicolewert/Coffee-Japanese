const express = require('express'); 
const router = express.Router()
const User = require('../../models/UserModel')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcryptjs')
const authToken = require('../../middleware/authToken')
const mongoose = require('mongoose')


// @route   POST route
// @desc    Register a new user and get token
// @access  Public
router.post('/register', async(req, res) => { 
    try{
        const {username, email, password, rpassword} = req.body
        
        //Validate
        if(!(username && email && password && rpassword)){
            return res.status(400).send("All fields are required")
        }

        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return res.status(400).send("Invalid Email.")
        }

        if(password !== rpassword){
            return res.status(400).send("Passwords must match.")
        }

        const existingUser = await User.findOne({email})
        if (existingUser){
            return res.status(409).send("A user with this email already exists. Please Login.")
        }

        //Salt & Hash password 
        const hashedPassword = await bcrypt.hash(password, 10)
        
        //Create user in db
        const user = await User.create({
            username: username,
            email: email.toLowerCase(),
            password: hashedPassword
        })

        //Create access token
        const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET,{expiresIn: "3h"})
        
        res.status(201).json(token)
    } catch(err) {
        res.status(500).send(err)
    }
})

// @route   GET route
// @desc    Get a user by id
// @access  Private
router.get('/getUser', authToken, async(req, res)=>{ 
    try{
        const userID = mongoose.Types.ObjectId(req.id)
         
        const user = await User.findById(userID)
        if (!user){
            return res.status(400).json("User not found")
        }
        
        res.status(201).json(user)
    } catch(err){
        res.status(500).send(err)
    }
})


module.exports = router; 