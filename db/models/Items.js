const mongoose = require('../index.js');

const ItemsSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  colloq: String,
  plaintext: String,
  consumed: Boolean,
  consumeOnFull: Boolean,
  stacks: Number,
  from: Array,
  specialRecipe: Number,
  inStore: Boolean,
  hideFromAll: Boolean,
  requiredChampion: String,
  requiredAlly: String,
  into: Array,
  image: {
    full: String,
    sprite: String,
    group: String,
    x: Number,
    y: Number,
    w: Number,
    h: Number,
  },
  gold: {
    base: Number,
    purchasable: Boolean,
    total: Number,
    sell: Number,
  },
  group: String,
  tags: Array,
  maps: {
    10: Boolean,
    11: Boolean,
    12: Boolean,
    21: Boolean,
  },
  stats: Object,
  effect: Object,
  depth: Number,
});

const Items = mongoose.model('item', ItemsSchema);
module.exports = Items;
