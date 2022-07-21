const { Post } = require("../models");

const postdata = [{
    id: "1",
    title: "Test post",
    user_id: 1,
}, ];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;