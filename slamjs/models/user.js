var mongoose = require('mongoose');

// Create schema
var userSchema  = new mongoose.Schema({
    "username" : String,
    "password" : String
});

module.exports = mongoose.model('user',userSchema,'user');
