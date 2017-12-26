var express = require('express');
var router = express.Router();
// let verifyToken = require('../middlewares/verifyToken');

var userController = require('../controllers/controller');

router.route('/users')
.post(userController.postUsers)
.get(userController.getUsers);

router.route('/userLogin')
.post(userController.loginUser);

router.route('/movies')
.get(userController.verifyLogin,userController.getMovie)
.post(userController.postMovie);

router.route('/movies/:id')
.put(userController.updateMovie)
.delete(userController.deleteMovie);

router.route('/series')
.get(userController.verifyLogin,userController.getSeries)
.post(userController.postSeries);

router.route('/series/:sid')
.delete(userController.deleteSeries)
.put(userController.updateSeries);

router.route('/seasons')
.post(userController.postSeason);

router.route('/seasons/:sid/:seasonNumber')
.put(userController.updateSeasons)
.delete(userController.deleteSeason);

router.route('/seasons/:sid')
.get(userController.getSeason);

router.route('/episodes')
.post(userController.postEpisode);

router.route('/episodes/:sid/:seasonNumber')
.get(userController.getEpisode);

router.route('/episodes/:id')
.put(userController.updateEpisode)
.delete(userController.deleteEpisode);

module.exports = router;