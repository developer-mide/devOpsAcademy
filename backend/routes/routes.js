// modules
const express = require('express')
const router = express.Router()

//models
const courseModelSchema = require('../models/coursesSchema')
const courseModelContentSchema = require('../models/coursesContentSchema')


// login
router.get('/login', (req, res) => {

    res.send("")

})

// register




//courses
router.get('/courses', (req, res) => {

    //fetch all from mongodb
    courseModelSchema.find({}, (err, result) => {

       if(err){
           console.log(err)
       }

      res.json(result)

    })

})

//courses content
router.get('/topics/:topic', (req, res) => {
   const topic = req.params.topic

   courseModelContentSchema.find({topic: topic}, (err, result) => {

       if(err){
           console.log(err)
       }

       res.json(result)

   })

})

//creates courses
router.post('/create', (req, res) => {

    const registered = new courseModelContentSchema({
        name: req.body.name,
        topic: req.body.topic,
        content: req.body.content
    })

    registered.save().then((data) => {
        res.json(data)
    })

    console.log(registered)

})


module.exports = router