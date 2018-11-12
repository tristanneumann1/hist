const router = require('express').Router();
const seederRouter = require('./seederRouter.js');
const controller = require('../controllers/controller.js');

router.route('/summoner')
.get(controller.getGames);

router.use('/seeder', seederRouter);

module.exports = router;
  