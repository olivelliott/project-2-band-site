const { Post } = require("../models");

const postData = [
  {
    title: "Looking for two tickets to the Durham show",
    content:
      "Hey guys! I need two tickets to the concert at Motorco next week. I want to surprise my girlfriend; she's sad that it's sold out. Willing to pay more than sale price!",
    user_id: 1,
  },
  {
    title: "Bonaroo",
    content:
      "Anyone else going to Bonaroo? Me and my friends will be staying in The Beyond. Message me if you want to meet up!",
    user_id: 2,
  },
  {
    title: "Solo in Atlanta",
    content:
      "I'll be going solo to the Tabernacle show if anyone wants to meet up for food/drinks beforehand, or needs a ride. I'm 23/m/SGL. Welcoming, fun, and looking for all kinds of friends for a fun, positive night!",
    user_id: 3,
  },
  {
    title: "New album?",
    content:
      "Anybody have any intel on when the new album is going to drop? Do you think there will be a vinyl print run? Give us an update, Vim!! LOL",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
