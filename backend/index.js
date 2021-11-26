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
app.use('/app', routes)
app.listen(4000, ()=>{console.log("server is up and running")})