const express = require('express')
const cors = require('cors')

const app = express()

// middleware
app.use(cors())
app.use(express.json())

const {getMovies, addMovie} = require('./controller.js')
// const getMovies = require('./controller.js').getMovies

app.get('/api/movies', getMovies)

app.post('/api/movies', addMovie)

//turns file into server
app.listen(4004, () => {
    console.log('up on 4004')
})