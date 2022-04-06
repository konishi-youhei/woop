const express = require('express');
const app = express(); // eslint-disable-line @typescript-eslint/no-unused-vars
const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/';
mongoose.connect(mongoDB);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', () => console.log('DB connection successful'));