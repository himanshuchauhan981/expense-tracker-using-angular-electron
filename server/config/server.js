const dotenv = require('dotenv')
const express = require('express')
const app = express()

const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')
const { route } = require('../routes')

app.use(cors())
app.options('*',cors())
dotenv.config()

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session({
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized: true,
    cookie: {secure : true}
}))

require('../db').connection
app.use('/api',route())

app.listen(process.env.PORT,process.env.HOST,(err)=>{
    if(err) console.log(err)
    else console.log(`Running on ${process.env.HOST}:${process.env.PORT}`)
})

