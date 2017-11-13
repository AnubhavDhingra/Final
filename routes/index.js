var express = require('express');
var router = express.Router();

var userController = require('../controllers/controller');

router.route('/users')
.post(userController.postUsers)
.get(userController.getUsers);

router.route('/userLogin')
.post(userController.loginUser);

router.route('/movies')
.get(userController.getMovie)
.post(userController.postMovie);

router.route('/movies/:id')
.put(userController.updateMovie)
.delete(userController.deleteMovie);

router.route('/series')
.get(userController.getSeries)
.post(userController.postSeries);

router.route('/series/:id')
.delete(userController.deleteSeries);

// router.route('/seriesdelete')
// .delete(userController.deleteSeries);


module.exports = router;