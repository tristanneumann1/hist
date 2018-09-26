
/*
Get Champ Data
Individual Champs
Item Data
Runes
Summs
*/

const axios = require('axios');

const seedSumms = (SummModel, cb) => {
  axios.get('http://ddragon.leagueoflegends.com/cdn/8.18.1/data/en_US/summoner.json').then((res) => {
    const summs = res.data.data;
    const summModels = [];
    for(const sum in summs) {
      summModels.push(summs[sum]);
    }
    SummModel.insertMany(summModels, cb);
  }).catch(err => console.error(err));
};

module.exports = seedSumms;
