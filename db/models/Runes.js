const mongoose = require('../index.js');

const RunesSchema = new mongoose.Schema({
  id: Number,
  key: String,
  icon: String,
  name: String,
  shortDesc: String,
  longDesc: String,
});

const Rune = mongoose.model('Rune', RunesSchema);
module.exports = Rune;
