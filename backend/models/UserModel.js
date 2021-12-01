const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true
    }, 
    password: {
        type: String, 
        required: true
    }, 
    rpassword : {
        type: String
    }, 
    date: {
        type: Date, 
        default: Date.now
    },
    token: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema)