const express = require('express');

const router = express.Router();
const musicController = require('./../controllers/musicController');

router.route('/').get(musicController.getSongs).post(musicController.postSongtoDatabase);
router.route('/id/:id').get(musicController.getSongsbyId);
router.route('/musicdirector/:musicdirector').get(musicController.getSongsbydirector);
router.route('/musicdirector/:musicdirector/singer/:singer').get(musicController.getSongsbyDirectorSinger);


module.exports = router;