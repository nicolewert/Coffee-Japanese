const jwt = require('jsonwebtoken')
require('dotenv').config()

const authToken = (req, res, next)=>{
    // Get Token from header
    const token = req.header('x-auth-token'); 

    //Check if there is a token
    if(!token) return res.status(401).send('Unauthorized: No token provided')
    
    // Decode Token
    try{
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET); 
        req.user = decodedToken.user; 
        next()
    } catch(err){
        res.status(403).send('Unauthorized: Invalid token')
    }
}

module.exports = authToken