const router = require("express").Router();
const sequelize = require("../config/connection");
<<<<<<< HEAD
const { Post, User, Comment, Show, Newsletter } = require("../models");

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/forum");
    return;
  }

  res.render("login");
});

router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    attributes: ["id", "title", "content", "user_id"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "user_id", "post_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/post/:id", (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id,
        },
        attributes: ["id", "title", "content", "user_id"],
        include: [
        {
            model: Comment,
            attributes: ["id", "comment_text", "user_id", "post_id"],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username'],
        }]
    }).then((dbPostData) => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post with this id'})
            return;
        }

        const posts = dbPostData.get({ plain: true})

        res.render('single-post', { post, loggedIn: req.session.loggedIn })
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
});

module.exports = router;
=======
const { Post, User, Comment, Vote } = require("../models");

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/forum");
        return;
    }

    res.render("login");
});

router.get('/', (req, res) => {
    res.render('homepage');
});


module.exports = router;
>>>>>>> f8892b256e659c0be9e8c2d7d08eff5eb7b33bdd
