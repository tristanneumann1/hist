const axios = require('axios');
const fs = require('fs');
const { version } = require('../Riot/config');

const seedSumms = (SummModel, cb) => {
  axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/summoner.json`).then((res) => {
    const summs = res.data.data;
    const summModels = [];
    const summonersObject = {};
    Object.keys(summs).forEach((sum) => {
      console.log('sum: ', sum);
      summModels.push(summs[sum]);
      summonersObject[summs[sum].key] = { image: summs[sum].image };
    });
    SummModel.insertMany(summModels, cb);
    fs.writeFile('./Riot/summoners.json', JSON.stringify(summonersObject), 'utf8', () => { console.log('files written'); });
  }).catch(err => console.error(err));
};

module.exports = seedSumms;
