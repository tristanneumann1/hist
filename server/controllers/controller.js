const { matchDataByUsername } = require('../../Riot/helpers.js');

const Champions = require('../../db/models/Champions.js');
const Runes = require('../../db/models/Runes.js');
const Summs = require('../../db/models/Summoners.js');

module.exports = {
  getGames(req, res) {
    const {
      region = 'NA1',
      username,
      endIndex = 10,
      beginIndex = 0,
      champion,
    } = req.query;
    const params = { endIndex, beginIndex };
    if (champion) {
      params.champion = champion;
    }
    matchDataByUsername((err, matchesData) => {
      if (err) { res.status(400).send(err); } else {
        res.status(200).send(matchesData);
      }
    }, username, region, params);
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
        console.log('icon: ', icon);
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
