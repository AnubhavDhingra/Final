var mongoose = require('mongoose');
var Series = require('./series');
var Season = require('./seasons');
var Schema = mongoose.Schema;

var episodeSchema = new Schema({
    sid: {type: String},
    seasonNumber: { type:Number },
    episodeName: { type:String },
    episodeNumber: { type: Number },
    description: { type: String },
    created_at: { type: Date, default: Date.now() }
    // series: [{type: Schema.Types.ObjectId, ref: 'Series'}],
    // season: [{type: Schema.Types.ObjectId, ref: 'Season'}]
});

module.exports = mongoose.model('Episode',episodeSchema);