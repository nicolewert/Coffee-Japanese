const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routes = require('./routes/routes')
const cors = require('cors')

const app = express()

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))

app.use(express.json())
app.use(cors())
//Define Routes (route, location)
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/lessons', require('./routes/api/lessons'))

