var User = require('../models/user');
var Episode = require('../models/episode');
var Movie = require('../models/movie');
var Season = require('../models/seasons');
var Series = require('../models/series');

exports.postUsers = function (req, res) {
    var user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: 1,
        created_at: new Date()
    });

    user.save(function (err, response) {
        if (err) {
            return customHandleError(req, res, next, err);
        }

        res.json({
            success: true,
            body: response
        })

    });
};

exports.getUsers = function (req, res) {
    User.find({}, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}

exports.loginUser = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username+ password);
    User.findOne({ username: username , password: password },
        function(err,response) {
            if(err) {
            res.json(err);
            }
            if(response) {
            res.json({ "response": response })
            }
            if(!response){
            res.json({ "response": response })
                
            }
        });
        
}

// exports.addMovie = function (req,res) {
//     var 
// }

