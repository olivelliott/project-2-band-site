const router = require("express").Router();
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");


// ! withAuth

// * GET ALL FORUM POSTS : include : comment, user
// RENDER it to the 'forum-home' handlebars page


// * GET SINGLE FORUM POST : include : comment, user
// RENDER it to the 'single-post' handlebars page



module.exports = router;

