const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// * /api/posts

// GET all posts
router.get("/", (req, res) => {
    console.log("======================");
    Post.findAll({
            attributes: ["id", "post_url", "title"],
            include: [{
                    model: Comment,
                    attributes: ["id", "user_id", "title"],
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
        .then((dbPostData) => res.json(dbPostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET a single post
router.get("/:id", (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "post_url", "title"],
            include: [{
                    model: Comment,
                    attributes: ["id", "user_id", "title"],
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
            if (!dbPostData) {
                res.status(404).json({ message: "No post found with this id" });
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
// ! title, content, instagram, facebook, user id

router.post("/", withAuth, (req, res) => {
    Post.create({
            title: req.body.title,
            user_id: req.session.user_id,
            facebook: req.body.facebook,
            instagram: req.body.instagram,
        })
        .then((dbPostData) => res.json(dbPostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// UPDATE a post by id (later)

// DELETE a post by id (later)

module.exports = router;