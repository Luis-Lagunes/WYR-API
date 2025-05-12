const express = require('express') // Import express
const path = require('path') // Import path
const router = express.Router() // Create a new router
const randomWyrQuestion = require('../model/wyr_questions') // Imports the random question functio from model/wyr_questions

router.get('/wyr', function (req, res, next) {
    const wyrQuestion = randomWyrQuestion() // Calls the function to get a random question
    res.json(wyrQuestion) // Returns the question as a JSON object
})

module.exports = router // Exports the router
