var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {type: String},
    email: {type: String},
    password: {type: String},
    role: {type:Number},
    created_at: {type: Date, default: Date.now},
});

module.exports = mongoose.model('User', userSchema);