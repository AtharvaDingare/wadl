const express = require('express');
const musicRouter = require('./routes/musicRoute'); // catching export here

const app = express();
app.set('view engine', 'ejs');

app.use('/api/v1/music', musicRouter);

module.exports = app;