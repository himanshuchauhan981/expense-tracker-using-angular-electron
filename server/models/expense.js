const mongoose = require('mongoose')

const Schema = mongoose.Schema

const expense = new Schema({
    Date:{
        type: Date,
    },
    Category:{
        type: String,
    },
    Amount: {
        type: Number,
    },
    Payee: {
        type: String
    },
    PaymentMethod: {
        type: String
    },
    Notes: {
        type: String
    },
    UserId: {
        type: String
    },
    Type: {
        type: String
    }
})

module.exports = mongoose.model('expense',expense)