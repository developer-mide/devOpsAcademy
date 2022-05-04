//modules
const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const routes = require('./routes/routes')


//environment variables
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI


//database connect
mongoose.connect(MONGODB_URI, {useNewUrlParser: true}, () => console.log('Mongoose connected successfully.'))


//middlewares
app.use(express.json())
app.use(cors())
app.use('/app', routes)


//listens on
app.listen(PORT, () => console.log("Server started listening on port: " + PORT))