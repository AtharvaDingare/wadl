const mongoose = require('mongoose');

const musicSchema = mongoose.Schema({
    songname: {
        type: String,
        required: [true, 'A song must have a name'],
        unique: true,
    },
    film: {
        type: String,
        required: false,
    },
    musicdirector: {
        type: String,
        required: [true, 'A song must have a director'],
    },
    singer: {
        type: String,
        required: [true, 'A song must have a singer'],
    }
});

const Song = mongoose.model('Song', musicSchema, 'songdetails');

module.exports = Song;