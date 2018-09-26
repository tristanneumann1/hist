const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notOP');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('db online');
});

module.exports = mongoose;
