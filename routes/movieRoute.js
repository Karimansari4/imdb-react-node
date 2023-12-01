const express = require('express')
const movieRouter = express.Router()
const { addMovie, getAllMovie } = require('../controller/movie')

movieRouter.get('/getAllMovies', getAllMovie)

movieRouter.post('/addMovie', addMovie)

module.exports = movieRouter