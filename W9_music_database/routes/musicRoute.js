const express = require('express');
const musicController = require('./../controllers/musicController');

const router = express.Router();

router.route('/').get(musicController.getSongs);
router.route('/id/:id').get(musicController.getSong);
router.route('/musicdirector/:musicdirector').get(musicController.getMusicDirector);
router.route('/musicdirector/:musicdirector/singer/:singer').get(musicController.getMusicDirectorSinger);

//router.route('/:id').get().post();

module.exports = router; // exported here