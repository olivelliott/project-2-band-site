const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Comment, Post, Show } = require('../../models');
const withAuth = require('../../utils/auth');

// * /api/posts

// GET all posts
router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'user_id'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'user_id', 'comment_text', 'post_id'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET a single post
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'title', 'content', 'user_id'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'user_id', 'post_id'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// CREATE a new post
router.post('/', withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    user_id: req.session.user_id,
    content: req.body.content,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
