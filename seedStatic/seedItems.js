const axios = require('axios');

const seedItems = (ItemModel, cb) => {
  axios.get('http://ddragon.leagueoflegends.com/cdn/8.18.1/data/en_US/item.json').then((res) => {
    const items = res.data.data;
    const itemModels = [];
    for(const item in items) {
      itemModels.push(new ItemModel(items[item]));
    }
    ItemModel.insertMany(itemModels, cb);
  }).catch(err => console.error(err));
};
// seedItems(null, ()=>{console.log('done')});

module.exports = seedItems;
