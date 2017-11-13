var mongoose = require('mongoose');
var Series = require('./series');
var Season = require('./seasons');
var Schema = mongoose.Schema;

var episodeSchema = new Schema({
    seriesName: { type:String },
    seasonNumber: { type:Number},
    episodeNumber: {type: Number},
    description: {type: String},
    _url: {type: String},
    series: [{type: Schema.Types.ObjectId, ref: 'Series'}],
    season: [{type: Schema.Types.ObjectId, ref: 'Season'}]
});

module.exports = mongoose.model('Episode',episodeSchema);