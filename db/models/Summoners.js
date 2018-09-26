const mongoose = require('../index.js');

const SummsSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  tooltip: String,
  maxrank: Number,
  cooldown: Array,
  cooldownBurn: String,
  cost: Array,
  costBurn: String,
  datavalues: {},
  effect: Array,
  effectBurn: Array,
  vars: Array,
  key: String,
  summonerLevel: Number,
  modes: Array,
  costType: String,
  maxammo: String,
  range: Array,
  rangeBurn: String,
  image: {
    full: String,
    sprite: String,
    group: String,
    x: Number,
    y: Number,
    w: Number,
    h: Number,
  },
  resource: String,
});

const Summs = mongoose.model('Summs', SummsSchema);
module.exports = Summs;
