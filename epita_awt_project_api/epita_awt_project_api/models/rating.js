const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    rating: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: false
    },
    MovieName:{
        type: String,
        require: false
    },
    Poster:{
        type: String,
        require: false
    }
},{
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = mongoose.model('FavMovieRating', ratingSchema)