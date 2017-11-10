var mongoose = require('mongoose');

var episodeSchema = new mongoose.Schema({
    seriesName: { type:String },
    seasonNumber: { type:Number},
    episodeNumber: {type: Number},
    description: {type: String}
});

module.exports = mongoose.model('Episode',episodeSchema);