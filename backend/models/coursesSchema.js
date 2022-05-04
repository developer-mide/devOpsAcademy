//modules
const mongoose = require('mongoose')

//schema 
const courseModelSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
         type: String,
         required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('courses', courseModelSchema)