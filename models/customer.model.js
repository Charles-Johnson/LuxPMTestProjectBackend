var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({});

var Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;