const seederRouter = require('express').Router();
const seedController = require('../controllers/seedController.js');


seederRouter.route('/championImg')
.get(seedController.getChampionImg);

seederRouter.route('/runeImg')
.get(seedController.getRuneImg);

seederRouter.route('/summsImg')
.get(seedController.getSummsImg);

seederRouter.route('/runeSeeder')
.post(seedController.postRunes);

seederRouter.route('/champSeeder')
.post(seedController.postChamps);

seederRouter.route('/summsSeeder')
.post(seedController.postSumms);

seederRouter.route('/allSeeder')
.post(seedController.postAll);

module.exports = seederRouter;
