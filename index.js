require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const corsOptions = require('./utils/corsOptions')
const auth = require('./routes/auth')
const home = require('./routes/home')
const authorize = require('./middleware/authorize')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use('/auth', auth)
app.use('/home', authorize, home)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to test db')
        app.listen(PORT, console.log(`Listening on port ${PORT}`))
    }).catch(err => console.log('connection err: ', err))
