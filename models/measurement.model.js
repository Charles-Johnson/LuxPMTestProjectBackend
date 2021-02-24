var mongoose = require('mongoose');

var MeasurementSchema = new mongoose.Schema({});

var Measurement = mongoose.model('Measurement', MeasurementSchema);
module.exports = Measurement;