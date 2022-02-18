const express = require('express'); 
const router = express.Router()
const lessons = require('../../models/LessonModel')

// @route   GET route
// @desc    Return a coffee lesson from db
// @access  Private
router.get("/", async(req, res)=>{
    const count = await lessons.count().exec()
    var random = Math.floor(Math.random()*count)
    const result = await lessons.findOne().skip(random).exec()
    res.json(result)
})

module.exports = router; 