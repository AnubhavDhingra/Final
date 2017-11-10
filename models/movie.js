var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    name: { type:String },
    genre: { type:String},
    description: {type: String}
});

module.exports = mongoose.model('Movie',movieSchema);