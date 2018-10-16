const axios = require('axios');
const { version } = require('../Riot/config.js');

const seedItems = (ItemModel, cb) => {
  axios.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/runesReforged.json`).then((res) => {
    const items = res.data;
    const itemModels = [];
    items.forEach((item) => {
      itemModels.push(new ItemModel(item));
      item.slots.forEach((slot) => {
        slot.runes.forEach(rune => itemModels.push(new ItemModel(rune)));
      });
    });
    ItemModel.insertMany(itemModels, cb);
  }).catch(err => console.error(err));
};

module.exports = seedItems;
