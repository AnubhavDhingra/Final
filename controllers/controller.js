// 
var User = require('../models/user');
var Episode = require('../models/episode');
var Movie = require('../models/movie');
var Season = require('../models/seasons');
var Series = require('../models/series');
var bcrypt = require('bcrypt');
// var jwt = require('express-jwt');
var jwt = require('jsonwebtoken');
// var config = require('./config');

// var secret = "supersecret";

// user
exports.postUsers = function (req, res) {
    let hash = bcrypt.hashSync(req.body.password, 10);
    var user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        role: req.body.role,
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

// middleware for jsonwebtoken authentication
exports.verifyLogin = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization;
    if (token) {
    // verifies secret and checks exp
        jwt.verify(req.headers.authorization.split(' ')[1],'superdupersecret', function(err, decoded) {
            if (err) { //failed verification.
                return res.json({"error": true});
            }
            req.decoded = decoded;
            next(); // no error, proceed
        });
    } else {
        // forbidden without token
        return res.status(403).send({
            "error": "unauthorized user"
                });
    }
}

exports.loginUser = function (req, res) {
    var username = req.body.username;
    User.findOne({username:username},function(error,response){
        console.log(typeof(response));
        let token = jwt.sign({response: response} ,'superdupersecret');
        if (bcrypt.compareSync(req.body.password, response.password)){
            return res.json( {response: response, token :token});
        }
        else {
            return res.json(error);
        }
    });
}

// movies
exports.postMovie = function (req,res) {
    var movie = new Movie({
        name: req.body.name,
        genre: req.body.genre,
        description: req.body.description,
        _url : req.body._url
    })
    movie.save(function (err, response) {
        if (err) {
            return customHandleError(req, res, next, err);
        }
        res.json({
            success: true,
            body: response
        })

    });
}

exports.getMovie = function (req,res) {
    Movie.find({}, function (err, response) {
        console.log('Inside find');
        if (err) {
             res.json(req, res, err);
        }
        console.log(response);
        return res.json(response);
    })
}

exports.updateMovie = function (req,res) {
    Movie.findByIdAndUpdate(req.params.id,{
       $set:req.body 
    },{
        new:true
    }, function (err, response) {
           if (err) {
               res.json(err);
           } else {
               res.json(response);
           }
    })
}

exports.deleteMovie = function (req,res) {
    Movie.findByIdAndRemove(req.params.id,function (err,response){
        if(err) {
            res.json(error);
        } 
        console.log("deleted");
        res.end("deleted");
    })
}

// series 
exports.getSeries = function (req,res) {
    Series.find({}, function (err, response) {
        console.log('Inside find');
        if (err) {
             res.json(req, res, err);
        }
        console.log(response);
        return res.json(response);
    })
}

exports.deleteSeries = function (req,res) {
    Series.remove({sid: req.params.sid}, function (err,response){
        if(err) {
            res.json(error);
        } 
        console.log("deleted");
        res.end("deleted");
    }).then(response => {
        Season.remove({ sid: req.params.sid}, function (err,response){
            if(err) {
                res.json(error);
            }
            console.log("deleted seasons");
        })
    }).then(response => {
        Episode.remove({ sid: req.params.sid}, function (err, response){
            if (err) {
                res.json(error);
            }
            console.log("deleted Episodes");
        })
    }) 
}

exports.postSeries = function (req,res) {
    console.log(req);
    var series = new Series({
        sid: req.body.sid,
        name: req.body.name,
        genre: req.body.genre,
        description: req.body.description,
        _url: req.body._url
    })
    series.save(function(err,response){
        if(err){
            return err
        } else {
            res.json({
                success:true,
                })
        }
    })
}

exports.updateSeries = function (req,res) {
    Series.findOneAndUpdate({sid: req.params.sid}, {
        $set: req.body
    }, function(err,response){
        if(err){
            return error;
        }
        console.log('updated');
        res.json(response);
    })
}

// seasons

exports.updateSeasons = function (req,res) {
    Season.findOneAndUpdate({sid: req.params.sid, seasonNumber: req.params.seasonNumber}, {
        $set: req.body
    }, function (err,response){
        if(err) {
            return error;
        }
        console.log('updated');
        res.json(response);
    })

}

exports.postSeason = function (req,res) {
    var season = new Season({
        sid: req.body.sid,
        seasonNumber: req.body.seasonNumber,
        seasonName: req.body.seasonName,
        description: req.body.description
    })
    console.log(season);
    season.save(function(err,response){
        console.log('inside save');
        if(err){
            res.json({sucess: false, body: err});
        } else {
            res.json({
                success:true,
                body: response
            })
        }
    })
}

exports.deleteSeason = function (req,res) {
    Season.remove({ sid: req.params.sid, seasonNumber: req.params.seasonNumber}, function (err,response){
        if (err){
            res.json(error);
        }
        console.log("deleted Season");
    }).then(response => {
        Episode.remove({sid: req.params.sid, seasonNumber: req.params.seasonNumber}, function (err,response){
            if (err){
                res.json(error);
            }
            console.log("Deleted Episodes");
        })
    })
}

exports.getSeason = function (req,res) {
    console.log('In season');
    Season.find({sid: req.params.sid}, function (err, response) {
        console.log('Inside find');
        if (err) {
            console.log('In error');
             res.json(req, res, err);
        }
        console.log(response);
        return res.json(response);
    })
}

// episode

exports.postEpisode = function (req,res) {
    var episode = new Episode({
        sid: req.body.sid,
        seasonNumber: req.body.seasonNumber,
        episodeName: req.body.episodeName,
        episodeNumber: req.body.episodeNumber,
        description: req.body.description
    })
    
    episode.save(function(err,response){
        if(err){
            return err
        } else {
            res.json({
                success:true,
                body: response
            })
        }
    })
}

exports.updateEpisode = function (req,res) {
    Episode.findOneAndUpdate ({ _id: req.params._id}, {
        $set : req.body
    }, function (err, response) {
        if(err) {
            return error;
        }
        console.log('updated');
        return res.json(response);
    })
}

exports.getEpisode = function (req,res) {
    console.log('In here');
    Episode.find({sid: req.params.sid, seasonNumber: req.params.seasonNumber}, function (err, response) {
        console.log('Inside find');
        if (err) {
             res.json(req, res, err);
        }
        console.log(response);
        return res.json(response);
    })
}

exports.deleteEpisode = function (req,res) {
    Episode.remove({ _id: req.params.id }, function (err,response) {
        if (err){
            res.json(error);
        }
        console.log("episode Deleted!");
        res.json(response);
    })
}
