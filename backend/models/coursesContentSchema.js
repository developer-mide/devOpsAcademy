//modules
const mongoose = require('mongoose')

//schema 
const coursesContentModelSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    topic: {
         type: String,
         required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('courseContent', coursesContentModelSchema)