const router = require('express').Router();
// const seedController = require('./controllers/seedController.js');
const controller = require('./controllers/controller.js');

router.route('/summoner')
  .get(controller.getGames);

router.route('/championImg')
  .get(controller.getChampionImg);

module.exports = router;

// .post(controller.postRunes);
// .post(controller.postItems);
// .post(controller.postChamps);
// .post(controller.seedSumms);
