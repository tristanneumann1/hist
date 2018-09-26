const SummModel = require('../../db/models/Summoners.js');
const seedSumms = require('../../seedStatic/seedSumms.js');

const ChampModel = require('../../db/models/Champions.js');
const seedChamps = require('../../seedStatic/seedChamps.js');

const ItemModel = require('../../db/models/Items.js');
const seedItems = require('../../seedStatic/seedItems.js');

const RuneModel = require('../../db/models/Runes.js');
const seedRunes = require('../../seedStatic/seedRunes.js');

module.exports = {
  postSumms(req, res) {
    seedSumms(SummModel, (err, data) => {
      if (err) { res.status(400).send(err); } else {
        res.status(201).send(`seed summs success: ${data}`);
      }
    });
  },
  postChamps(req, res) {
    seedChamps(ChampModel, (err, data) => {
      if (err) { res.status(400).send(err); } else {
        res.status(201).send(`seed Champs success: ${data}`);
      }
    });
  },
  postItems(req, res) {
    seedItems(ItemModel, (err, data) => {
      if (err) { res.status(400).send(err); } else {
        res.status(201).send(`seed Items success: ${data}`);
      }
    });
  },
  postRunes(req, res) {
    seedRunes(RuneModel, (err, data) => {
      if (err) { res.status(400).send(err); } else {
        res.status(201).send(`seed Runes success: ${data}`);
      }
    });
  },
};
