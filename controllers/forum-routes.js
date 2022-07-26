const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Show } = require("../models");
const withAuth = require("../utils/auth");

// ! withAuth

// * GET ALL FORUM POSTS : include : comment, user
// RENDER it to the 'forum-home' handlebars page

//! add withAuth once pathways are cleared
router.get("/", (req, res) => {
    console.log(req.session);
    console.log("======================");
    Post.findAll({
            attributes: ["id", "title", "user_id", "content"],
            include: [{
                    model: Comment,
                    attributes: ["id", "comment_text", "post_id", "user_id"],
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
            res.render("forum-home", { posts, loggedIn: true });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// * GET SINGLE FORUM POST : include : comment, user
// RENDER it to the 'single-post' handlebars page

//! add withAuth after the path below once pathways are cleared

router.get("/posts/:id", (req, res) => {
    Post.findById(req.params.id, {
            attributes: ["id", "title", "user_id", "content"],
            include: [{
                    model: Comment,
                    attributes: ["id", "comment_text", "user_id", "post_id"],
                    include: {
                        model: User,
                        attributes: ["username", "instagram", "facebook"],
                    },
                },
                {
                    model: User,
                    attributes: ["username"],
                },
            ],
        })
        .then((dbPostData) => {
            if (dbPostData) {
                const post = dbPostData.get({ plain: true });

                res.render("single-post", {
                    post,
                    loggedIn: true,
                });
            } else {
                res.status(404).end();
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router;

//testing