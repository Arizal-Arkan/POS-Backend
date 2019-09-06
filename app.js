require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.SERVER_PORT || 6969

const Cors = require('cors')
const xssFilter = require('x-xss-protection')
const logger = require('morgan')
const userRoute = require('./src/route/user')

app.use(Cors())
app.use(xssFilter())
app.use(logger('dev'))

app.listen(port, ()=>{
    console.log(`Aku lagi di port ${port} nih`)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', userRoute)
