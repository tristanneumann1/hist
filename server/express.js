const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const parser = require('body-parser');
const path = require('path');

const router = require('./router.js');
const app = express();

app.use(helmet());
app.use(parser.urlencoded({ extended: false }));
app.use(morgan('[:date[clf]] :method :url :status :res[content-length] - :response-time ms'));
app.use('/api', router);
app.use('/', express.static(path.join(__dirname, '../client/dist')));
// app.use('/api/stats', router);

module.exports = app;