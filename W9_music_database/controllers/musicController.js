const Song = require('./../models/musicSchema');

exports.getSongs = async (req, res, next) => {
    try {
        const songs = await Song.find();
        console.log(songs);
        // res.status(200).json({
        //     status: 'success',
        //     data: {
        //         songs: songs,
        //     }
        // });
        res.status(200).render('table', {songs});
    } catch(err) {
        res.status(400).json({
            status: 'Failed',
            message: `Internal server error ${err}`,
        });
        console.log(`Server error`);
    }
}

exports.getSong = async (req, res, next) => {
    const Id = req.params.id;
    try {
        const song = await Song.findById(Id);
        res.status(200).json({
            status: 'Success',
            data: {
                song: song,
            }
        });
    } catch(err) {
        console.log('Database error/ Internal Server error');
        res.status(400).json({
            status: 'Failed',
            message: `Some error occured ${err}`,
        });
    }
}

exports.getMusicDirector = async (req, res, next) => {
    const directorName = req.params.musicdirector;
    try {
        console.log(directorName);
        const songs = await Song.find({musicdirector: directorName});
        res.status(200).json({
            status: 'Success',
            data: {
                songs: songs,
            }
        });
    } catch(err) {
        console.log('Database error/ Internal server error');
        res.status(400).json({
            status: 'Failed',
            message: `Some error occured ${err}`
        });
    }
}

exports.getMusicDirectorSinger = async (req, res, next) => {
    try {
        const singer = req.params.singer;
        const musicdirector = req.params.musicdirector;
        const songs = await Song.find({musicdirector: musicdirector, singer: singer});
        res.status(200).json({
            status: 'Success',
            data: {
                songs: songs,
            }
        });
    } catch(err) {
        console.log('Server error occured');
        res.status(400).json({
            status: 'Failed',
            message: `Internal Server error occured ${err}`,
        });
    }
}