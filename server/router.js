const router = require('express').Router();
// const seedController = require('./controllers/seedController.js');
const summonerController = require('./controllers/summonerController.js');

router.route('/summoner')
  .get(summonerController.getSummoner);

module.exports = router;

// .post(controller.postRunes);
// .post(controller.postItems);
// .post(controller.postChamps);
// .post(controller.seedSumms);
