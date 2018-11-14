const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const parser = require('body-parser');
const path = require('path');

const router = require('./routes/router.js');
const app = express();

app.use(helmet());
app.use(parser.urlencoded({ extended: false }));
app.use(morgan('[:date[clf]] :method :url :status :res[content-length] - :response-time ms'));
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

module.exports = app;