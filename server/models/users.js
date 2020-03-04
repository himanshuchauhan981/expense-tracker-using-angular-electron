
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const users = new Schema({
    email:{
        type: String,
        required:[true, 'Email ID is required'],
        validate: {
            validator : (email) =>{
                return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
            },
            message: 'Invalid Email ID'
        }
    },
    password:{
        type: String,
        required:[true,'Password is required'],
        minlength: [6,'Minimum length of password should be 6']
    },
})

module.exports = mongoose.model('users',users)