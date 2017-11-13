var User = require('../models/user');
var Episode = require('../models/episode');
var Movie = require('../models/movie');
var Season = require('../models/seasons');
var Series = require('../models/series');
var bcrypt = require('bcrypt');

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

exports.loginUser = function (req, res) {
    var username = req.body.username;
    User.findOne({username:username},function(error,response){
        if (bcrypt.compareSync(req.body.password, response.password)){
            return res.json( {"response": response});
        }
        else {
            return res.json(error);
        }
    });
}

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
    Series.findByIdAndRemove(req.params.id,function (err,response){
        if(err) {
            res.json(error);
        } 
        console.log("deleted");
        res.end("deleted");
    }) 
}




    
exports.postSeries = function (req,res) {
    console.log('Hi There!')
    var series = new Series({
        name: req.body.name,
        genre: req.body.genre,
        description: req.body.description,
        _url: req.body._url
    })
    series.save(function (err,serie) {
        console.log("df")
        if (err) return err;
        var season = new Season({
            seasonNumber: req.body.seasonNumber,
            series: serie._id
        });
        season.save(function (err,sea){
            if(err) return console.error('Error2');
            var episode = new Episode({
                episodeNumber: req.body.episodeNumber,
                season: sea._id
            });
            episode.save(function (err, epi){
                if (err) return err;
                epi.json({
                    success: true,
                    body: response
                });
            });
        });

    });
}
