const mongoose = require('../index.js');

const ChampionSchema = new mongoose.Schema({
  version: String,
  id: String,
  key: String,
  name: String,
  title: String,
  blurb: String,
  info: {
    attack: Number,
    defense: Number,
    magic: Number,
    difficulty: Number,
  },
  image: {
    full: String,
    sprite: String,
    group: String,
    x: Number,
    y: Number,
    w: Number,
    h: Number,
  },
  tags: Array,
  partype: String,
  stats: {
    hp: Number,
    hpperlevel: Number,
    mp: Number,
    mpperlevel: Number,
    movespeed: Number,
    armor: Number,
    armorperlevel: Number,
    spellblock: Number,
    spellblockperlevel: Number,
    attackrange: Number,
    hpregen: Number,
    hpregenperlevel: Number,
    mpregen: Number,
    mpregenperlevel: Number,
    crit: Number,
    critperlevel: Number,
    attackdamage: Number,
    attackdamageperlevel: Number,
    attackspeedoffset: Number,
    attackspeedperlevel: Number,
  },
});

const Champions = mongoose.model('Champion', ChampionSchema);
module.exports = Champions;
