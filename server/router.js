const router = require('express').Router();
const seedController = require('./controllers/seedController.js');
const controller = require('./controllers/controller.js');

router.route('/summoner')
  .get(controller.getGames);

router.route('/championImg')
  .get(controller.getChampionImg);

router.route('/runeImg')
  .get(controller.getRuneImg);

router.route('/summsImg')
  .get(controller.getSummsImg);

router.route('/runeSeeder')
  .post(seedController.postRunes);

router.route('/champSeeder')
  .post(seedController.postChamps);

module.exports = router;

// .post(controller.postItems);
