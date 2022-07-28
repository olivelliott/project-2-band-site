const { Newsletter, Post } = require("../models");

const newsletterData = [
  {
    email: "vahlalla@gmail.com",
  },
];

const seedNews = () => Post.bulkCreate(newsletterData);

module.exports = seedNews;
