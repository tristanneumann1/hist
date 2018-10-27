const axios = require('axios');
const fs = require('fs');
const { version } = require('../Riot/config.js');

const seedRunes = (RunesModel, cb) => {
  axios.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/runesReforged.json`).then((res) => {
    const runesData = res.data;
    const runesModels = [];
    const runes = {};
    runesData.forEach((runeFamily) => {
      runesModels.push(new RunesModel(runeFamily));
      console.log('runeFamily', runeFamily);
      runeFamily.slots.forEach((slot) => {
        slot.runes.forEach(runeSlot => runesModels.push(new RunesModel(runeSlot)));
      });
    });
    RunesModel.insertMany(runesModels, cb);
  }).catch(err => console.error(err));
};

module.exports = seedRunes;
