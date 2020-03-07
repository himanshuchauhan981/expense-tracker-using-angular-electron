const mongoose = require('mongoose')

const Schema = mongoose.Schema

const category = new Schema({
    type: {
        type : String
    }
})

module.exports = mongoose.model('category',category)