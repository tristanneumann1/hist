const axios = require('axios');
const fs = require('fs');
const { version } = require('../Riot/config.js');

const seedChamps = (ChampModel, cb) => {
  axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`).then((res) => {
    const Champs = res.data.data;
    const champModels = [];
    const champions = {};
    for(const champ in Champs) {
      champions[Champs[champ].key] = Champs[champ].image.full;
      champModels.push(new ChampModel(Champs[champ]));
    }
    ChampModel.insertMany(champModels, cb);
    fs.writeFile('./Riot/champions.json', JSON.stringify(champions), 'utf8', () => { console.log('files written'); });
  }).catch(err => console.error(err));
};

module.exports = seedChamps;
