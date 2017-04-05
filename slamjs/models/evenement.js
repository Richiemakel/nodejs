var mongoose = require('mongoose');

// Create schema
var figSchema  = new mongoose.Schema({
    "nom" : String,
    "date" : Date,
    "list" : String,
    "nombre" : String,
    "type" : String
    
});

module.exports = mongoose.model('Evenement',figSchema,'evenement');
