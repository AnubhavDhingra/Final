var express = require('express');
var router = express.Router();

var userController = require('../controllers/controller');

router.route('/users')
.post(userController.postUsers)
.get(userController.getUsers);

router.route('/userLogin')
.post(userController.loginUser);




module.exports = router;