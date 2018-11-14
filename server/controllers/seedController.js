const SummModel = require('../../db/models/Summoners.js');
const seedSumms = require('../../seedStatic/seedSumms.js');

const ChampModel = require('../../db/models/Champions.js');
const seedChamps = require('../../seedStatic/seedChamps.js');

const ItemModel = require('../../db/models/Items.js');
const seedItems = require('../../seedStatic/seedItems.js');

const RuneModel = require('../../db/models/Runes.js');
const seedRunes = require('../../seedStatic/seedRunes.js');

const seedSummsPromise = promisify(seedSumms);
const seedChampsPromise = promisify(seedChamps);
const seedItemsPromise = promisify(seedItems);
const seedRunesPromise = promisify(seedRunes);

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
  postAll(req, res) {
    const summsPromise = seedSummsPromise(SummModel);
    const champsPromise = seedChampsPromise(ChampModel);
    const itemsPromise = seedItemsPromise(ItemModel);
    const runesPromise = seedRunesPromise(RuneModel);
    Promise.all([summsPromise, champsPromise, itemsPromise, runesPromise])
    .then((seededData) => {
      res.status(201).send('All seeded');
    })
    .catch((err) => {
      res.status(404).send(err);
    });
  },
  getChampionImg(req, res) {
    Champions.findOne({ key: req.query.key }, 'image', (err, image) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(image.image);
      }
    });
  },
  getRuneImg(req, res) {
    Runes.findOne({ id: req.query.key }, 'icon', (err, icon) => {
      if (err) {
        res.status(500).send(err);
      } else {
        const nameArr = icon.icon.split('/');
        const name = nameArr[nameArr.length - 1];
        res.status(200).send(name);
      }
    });
  },
  getSummsImg(req, res) {
    Summs.findOne({ key: req.query.key }, 'image', (err, image) => {
      if (err) {
        res.status(500).send(err);
      } else if (image && image.image && image.image.full) {
        res.status(200).send(image.image.full);
      } else {
        res.status(400).send('image not found');
      }
    });
  },
};

function promisify(asyncFunction) {
  return (...args) => {
    return new Promise(function (resolve, reject) {
      asyncFunction(...args, (err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}
