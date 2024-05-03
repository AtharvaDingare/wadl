const express = require('express');
const bodyParser = require('body-parser');
const musicRouter = require('./routes/musicRoute');

// routes
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// // Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());
app.set('view engine', 'ejs');


// middleware
app.use('/api/v1/music', musicRouter);

module.exports = app;