var mongoose = require('mongoose');
var Episode = require('./episode');
var Season = require('./seasons');
var Schema = mongoose.Schema;

var seriesSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {type:String, unique:true},
    genre: {type:String},
    description: {type: String},
    _url: {type: String},
    seasons: [{type: Schema.Types.ObjectId, ref: 'Season'}],
    episodes: [{type: Schema.Types.ObjectId, ref:'Episode'}] 
});

module.exports = mongoose.model('Serie',seriesSchema);