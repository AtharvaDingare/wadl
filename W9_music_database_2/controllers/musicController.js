const Song = require('./../models/musicSchema');
const {MongoClient} = require('mongodb');

exports.getSongs = async (req, res, next) => {
    try {
        const songs = await Song.find();
        res.status(200).render('display', {songs});
    } catch(err) {
        console.log('Server Internal Error occured');
        res.status(400).json({
            status: 'Failed',
            message: `Erro occured ${err}`,
        });
    }
}

exports.getSongsbyId = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const songs = await Song.findById(Id);
        res.status(200).json({
            status: 'Success',
            data: {
                songs: songs,
            }
        });
    } catch(err) {
        console.log('Server Error');
        res.status(400).json({
            status: 'Failed',
            message: `Error occured while fetching songs : ${err}`,
        });
    }
}

exports.getSongsbydirector = async (req, res, next) => {
    try{
        const songs = await Song.find({musicdirector: req.params.musicdirector});
        res.status(200).render('display', {songs});
    } catch(err) {
        console.log('Error occured');
        res.status(400).json({
            status: 'Failed',
            message: `Error occured while fetching songs ${err}`,
        });
    }
}

exports.getSongsbyDirectorSinger = async (req, res, next) => {
    try {
        const songs = await Song.find({musicdirector: req.params.musicdirector, singer: req.params.singer});
        res.status(200).json({
            status: 'Success',
            data: {
                songs: songs,
            }
        });
    } catch(err) {
        console.log('Error');
        res.status(400).json({
            status: 'Failed',
            message: `Error occured while fetching songs from the server ${err}`,
        });
    }
}

exports.postSongtoDatabase = async (req, res, next) => {
    try {
        console.log(req.body);
        const songname = req.body.songname;
        const film = req.body.film;
        const musicdirector = req.body.musicdirector;
        const singer = req.body.singer;
        const newSong = new Song({
            'songname': songname,
            'film': film,
            'musicdirector': musicdirector,
            'singer': singer,
        });
        await newSong.save();
        console.log('Song inserted successfully');
        res.status(200).json({
            status: 'Success',
            message: 'Data submitted successfully',
        });
    } catch (err) {
        console.log('Some error occured');
        res.status(400).json({
            status: 'Failed',
            message: `Some error occured ${err}`,
        });
    }
}