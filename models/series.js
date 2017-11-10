var mongoose = require('mongoose');

var seriesSchema = new mongoose.Schema({
    name: { type:String, unique:true },
    genre: { type:String},
    description: {type: String}
});

module.exports = mongoose.model('Serie',seriesSchema);