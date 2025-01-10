const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Oops Error Occurred");
        console.log(err);
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema);     // it will generate a collection named "movies" in plural and all lowercase. first parameter should be capitalized.
//const gladiator = new Movie({title: "Gladiator", year: 2005, score: 9.7, rating: 'R'});

Movie.insertMany([
    {title: "American Pie", year: 1998, score: 10, rating: 'R'},
    {title: "Lion King", year: 1996, score: 9, rating: 'E'},
    {title: "300", year: 2010, score: 9.9, rating: 'R'}
])
    .then(data => {
        console.log("It Worked");
        console.log(data);
    })