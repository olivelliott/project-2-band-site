const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Show } = require("../models");

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/forum");
    return;
  }

  res.render("login");
});

router.get("/", (req, res) => {
  res.render("homepage");
});

// router.get("/posts/:id", (req, res) => {
//     Post.findByPk(req.params.id, {
//             attributes: ["id", "title", "user_id", "content"],
//             include: [{
//                     model: Comment,
//                     attributes: ["id", "comment_text", "user_id", "post_id"],
//                     include: {
//                         model: User,
//                         attributes: ["username", "instagram", "facebook"],
//                     },
//                 },
//                 {
//                     model: User,
//                     attributes: ["username"],
//                 },
//             ],
//         })
//         .then((dbPostData) => {
//             if (dbPostData) {
//                 const post = dbPostData.get({ plain: true });
//                 res.render("single-post", {
//                     post,
//                     loggedIn: true,
//                 });
//             } else {
//                 res.status(404).end();
//             }
//         })
//         .catch((err) => {
//             res.status(500).json(err);
//         });
// });

module.exports = router;
