const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// ! withAuth

// * GET ALL FORUM POSTS : include : comment, user
// RENDER it to the 'forum-home' handlebars page

//I think this path is probably wrong
TODO: router.get("/", withAuth, (req, res) => {
    console.log(req.session);
    console.log("======================");
    // Post.findAll({
    //             where: {
    //                 id: req.session.id,
    //     },
    //     attributes: ["id", "username", "title"],
    //     include: [{
    //             model: Comment,
    //             attributes: ["id", "comment_text", "post_id", "user_id"],
    //             include: {
    //                 model: User,
    //                 attributes: ["username"],
    //             },
    //         },
    //         {
    //             model: User,
    //             attributes: ["username"],
    //         },
    //     ],
    // })
    // .then((dbPostData) => {
    //     const posts = dbPostData.map((post) => post.get({ plain: true }));
    //     res.render("forum-home", { posts, loggedIn: true });
    // })
    // .catch((err) => {
    //     console.log(err);
    //     res.status(500).json(err);
    // });
});

// // * GET SINGLE FORUM POST : include : comment, user
// // RENDER it to the 'single-post' handlebars page

// //I think this path is probably wrong
// TODO: router.get("/edit/:id", withAuth, (req, res) => {
//     Post.findByPk(req.params.id, {
//             attributes: ["id", "username", "title"],
//             include: [{
//                     model: Comment,
//                     attributes: ["id", "comment_text", "post_id", "user_id"],
//                     include: {
//                         model: User,
//                         attributes: ["username"],
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