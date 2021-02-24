var mongoose = require('mongoose');

var AdminSchema = new mongoose.Schema({});

var Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;