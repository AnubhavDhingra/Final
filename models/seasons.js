var mongoose = require('mongoose');
var Series = require('./series');
var Episode = require('./episode');
var Schema = mongoose.Schema;

var seasonSchema = new Schema({
    seriesName: { type:String },
    seasonNumber: { type:Number},
    description: {type: String},
    _url: {type:String},
    series: [{type: Schema.Types.ObjectId, ref: 'Series'}],
    episodes: [{type: Schema.Types.ObjectId, ref: 'Episode'}]
});

module.exports = mongoose.model('Season',seasonSchema);