const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()

dotenv.config()

//Connect DB
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))

app.use(express.json())
app.use(cors())

//Define Routes (route, location)
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/lessons', require('./routes/api/lessons'))
app.use('/api/home', require('./routes/api/home'))

app.listen(4000, ()=>{console.log("server is up and running on port 4000")})