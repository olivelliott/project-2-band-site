const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// * api/comments

// GET all comments
router.get("/", (req, res) => {
    Comment.findAll()
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET a single comment
router.get('/:id', (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// CREATE a new comment
// ! text, user id, post id
router.post("/", withAuth, (req, res) => {
    // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
    Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id,
        })
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// UPDATE a comment

// DELETE a comment
router.delete("/:id", withAuth, (req, res) => {
    Comment.destroy({
            where: {
                id: req.params.id,
            },
        })
        .then((dbCommentData) => {
            if (!dbCommentData) {
                res.status(404).json({ message: "No comment found with this id!" });
                return;
            }
            res.json(dbCommentData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;