const express = require('express')
const router = express.Router()
const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcryptjs')

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
        
        //Create access token
        const token = jwt.sign({ username: username }, process.env.TOKEN_SECRET,{expiresIn: "3h"})
        
        //Create user in db
        const user = await User.create({
            username: username,
            email: email.toLowerCase(),
            password: hashedPassword,
            token: token
        })
        res.status(201).json({token: user.token})
    } catch(err) {
        res.status(500).send(err)
    }
})

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

module.exports = router