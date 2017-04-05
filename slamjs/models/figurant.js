var mongoose = require('mongoose');

// Create schema
var figSchema  = new mongoose.Schema({
    "nom" : String,
    "identifiant" : String
});

module.exports = mongoose.model('Figurant',figSchema,'figurant');
