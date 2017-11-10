var mongoose = require('mongoose');


var seasonSchema = new mongoose.Schema({
    seriesName: { type:String },
    seasonNumber: { type:Number},
    description: {type: String}
});

module.exports = mongoose.model('Season',seasonSchema);