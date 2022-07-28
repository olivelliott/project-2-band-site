const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Show } = require('../models');

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/forum');
    return;
  }

  res.render('login');
});

router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;
