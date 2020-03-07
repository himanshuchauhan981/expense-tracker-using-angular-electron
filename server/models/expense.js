const mongoose = require('mongoose')

const Schema = mongoose.Schema

const expense = new Schema({
    date:{
        type: Date,
    },
    category:{
        type: String,
    },
    amount: {
        type: Number,
    },
    Payee: {
        type: String
    },
    paymentMethod : {
        type: String
    },
    notes: {
        type: String
    }
})

module.exports = mongoose.model('expense',expense)