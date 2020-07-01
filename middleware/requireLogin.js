const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: 'you mustbe loggin in' });
  }
  const token = authorization.replace('Beare ', '');
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      res.status(401).json({ error: 'you must be loggin in' });
    }
    const { _id } = payload;
    User.findById(id).then((userdata) => {
      req.user = userdata;
    });
    next();
  });
};
