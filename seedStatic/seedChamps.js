const axios = require('axios');

const seedChamps = (ChampModel, cb) => {
  axios.get('http://ddragon.leagueoflegends.com/cdn/8.18.1/data/en_US/champion.json').then((res) => {
    const Champs = res.data.data;
    const champModels = [];
    for(const champ in Champs) {
      champModels.push(new ChampModel(Champs[champ]));
    }
    ChampModel.insertMany(champModels, cb);
  }).catch(err => console.error(err));
};

module.exports = seedChamps;
