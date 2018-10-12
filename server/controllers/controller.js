const { matchDataByUsername } = require('../../Riot/helpers.js');

const Champions = require('../../db/models/Champions.js');

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
    })
  }
};
