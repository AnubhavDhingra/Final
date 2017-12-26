var mongoose = require('mongoose');
var Series = require('./series');
var Episode = require('./episode');
var Schema = mongoose.Schema;

var seasonSchema = new Schema({
    sid: {type: String},
    seasonNumber: {type:Number},
    seasonName: {type:String},    
    description: {type: String},
    created_at: { type: Date, default: Date.now() }
    // series: [{type: Schema.Types.ObjectId, ref: 'Series'}],
    // episodes: [{type: Schema.Types.ObjectId, ref: 'Episode'}]
});

module.exports = mongoose.model('Season',seasonSchema);