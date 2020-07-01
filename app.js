const express = require('express');
const PORT = 5000;
const mongoose = require('mongoose');
var app = express();
const { MONGOURI } = require('./keys');
//U59rQ0F1wfRuUu1Q

require('./models/user');

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('connect success');
});

mongoose.connection.on('error', (err) => {
  console.log('connect fail', err);
});

app.listen(PORT, () => {
  console.log('server is running on', PORT);
});
