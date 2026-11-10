const mongoose = require('mongoose');

const kueSchema = new mongoose.Schema({
  jalan: String,
  kota: String,
}, { _id: false });

module.exports = mongoose.model('kue', kueSchema);