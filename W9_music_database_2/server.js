const express = require('express');
const mongoose = require('mongoose');

const app = require('./app');

const db = 'mongodb://localhost:27017/music';

mongoose.connect(db, {
    
}).then( () => {
    console.log('Connected to MONGODB');
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running ${port}`);
});