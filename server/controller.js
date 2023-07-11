const movieDatabase = require('./db.json')
let currentId = 11

module.exports = { // export object
    getMovies: (req, res) => { // key:value pair
        res.status(200).send(movieDatabase)
    },
    addMovie: (req, res) => {
        const {title, rating, imageURL} = req.body // data from frontend

        movieDatabase.push({ // make new object to push to new object
            id: currentId,
            title: title,
            rating:rating,
            imageURL: imageURL
        })

        currentId++

        res.status(200).send(movieDatabase)
    }
} // if another file wants to require this file, then this file will give it whatever is set to module.exports