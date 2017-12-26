var mongoose = require('mongoose');
var Episode = require('./episode');
var Season = require('./seasons');
var Schema = mongoose.Schema;

var seriesSchema = new Schema({
    sid: {type: String, unique: true},
    name: {type:String, unique:true},
    genre: {type:String},
    description: {type: String},
    _url: {type: String},
    created_at: { type: Date, default: Date.now() }  
    
    // seasons: [{type: Schema.Types.ObjectId, ref: 'Season'}],
    // episodes: [{type: Schema.Types.ObjectId, ref:'Episode'}] 
});

module.exports = mongoose.model('Serie',seriesSchema);