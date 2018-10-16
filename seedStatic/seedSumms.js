const axios = require('axios');

const seedSumms = (SummModel, cb) => {
  axios.get(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/summoner.json`).then((res) => {
    const summs = res.data.data;
    const summModels = [];
    for(const sum in summs) {
      summModels.push(summs[sum]);
    }
    SummModel.insertMany(summModels, cb);
  }).catch(err => console.error(err));
};

module.exports = seedSumms;
