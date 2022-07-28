const { Post } = require("../models");

const postData = [{
        title: "Woke up and chose violence.",
        content: "today i felt like i need to let off a little stress.",
        user_id: 1,
    },
    {
        title: "Having a laze day.",
        content: "today i dont feel like doiung anything. i just wanna lay in my bed.",
        user_id: 2,
    },
    {
        title: "Played video games.",
        content: "so excited for the new halo release.",
        user_id: 3,
    },
    {
        title: "Made better choices.",
        content: "Today i finally got around to leg day.",
        user_id: 4,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;