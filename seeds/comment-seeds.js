const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "I wish i could have seen that.",
    user_id: 1,
    post_id: 1,
  },
  // {
  //   comment_text: "Preach!",
  //   user_id: 2,
  //   post_id: 20,
  // },
  // {
  //   comment_text: "I know thats right.",
  //   user_id: 3,
  //   post_id: 19,
  // },
  // {
  //   comment_text: "One more time for the poeple in the back.",
  //   user_id: 4,
  //   post_id: 18,
  // },
  // {
  //   comment_text: "im so jealous.",
  //   user_id: 5,
  //   post_id: 17,
  // },
  // {
  //   comment_text: "I wish i could have seen that.",
  //   user_id: 6,
  //   post_id: 16,
  // },
  // {
  //   comment_text: "Preach!",
  //   user_id: 7,
  //   post_id: 15,
  // },
  // {
  //   comment_text: "I know thats right.",
  //   user_id: 8,
  //   post_id: 14,
  // },
  // {
  //   comment_text: "One more time for the poeple in the back.",
  //   user_id: 9,
  //   post_id: 13,
  // },
  // {
  //   comment_text: "im so jealous.",
  //   user_id: 10,
  //   post_id: 12,
  // },
  // {
  //   comment_text: "I wish i could have seen that.",
  //   user_id: 11,
  //   post_id: 11,
  // },
  // {
  //   comment_text: "Preach!",
  //   user_id: 12,
  //   post_id: 10,
  // },
  // {
  //   comment_text: "I know thats right.",
  //   user_id: 13,
  //   post_id: 9,
  // },
  // {
  //   comment_text: "One more time for the poeple in the back.",
  //   user_id: 14,
  //   post_id: 8,
  // },
  // {
  //   comment_text: "im so jealous.",
  //   user_id: 15,
  //   post_id: 7,
  // },
  // {
  //   comment_text: "I wish i could have seen that.",
  //   user_id: 1,
  //   post_id: 6,
  // },
  // {
  //   comment_text: "Preach!",
  //   user_id: 2,
  //   post_id: 5,
  // },
  // {
  //   comment_text: "I know thats right.",
  //   user_id: 3,
  //   post_id: 4,
  // },
  // {
  //   comment_text: "One more time for the poeple in the back.",
  //   user_id: 4,
  //   post_id: 3,
  // },
  // {
  //   comment_text: "im so jealous.",
  //   user_id: 5,
  //   post_id: 2,
  // },
  // {
  //   comment_text: "I wish i could have seen that.",
  //   user_id: 6,
  //   post_id: 1,
  // },
  // {
  //   comment_text: "Preach!",
  //   user_id: 7,
  //   post_id: 20,
  // },
  // {
  //   comment_text: "I know thats right.",
  //   user_id: 8,
  //   post_id: 19,
  // },
  // {
  //   comment_text: "One more time for the poeple in the back.",
  //   user_id: 9,
  //   post_id: 18,
  // },
  // {
  //   comment_text: "im so jealous.",
  //   user_id: 10,
  //   post_id: 17,
  // },
  // {
  //   comment_text: "I wish i could have seen that.",
  //   user_id: 11,
  //   post_id: 16,
  // },
  // {
  //   comment_text: "Preach!",
  //   user_id: 12,
  //   post_id: 15,
  // },
  // {
  //   comment_text: "I know thats right.",
  //   user_id: 13,
  //   post_id: 14,
  // },
  // {
  //   comment_text: "One more time for the poeple in the back.",
  //   user_id: 14,
  //   post_id: 13,
  // },
  // {
  //   comment_text: "im so jealous.",
  //   user_id: 15,
  //   post_id: 12,
  // },
  // {
  //   comment_text: "I wish i could have seen that.",
  //   user_id: 1,
  //   post_id: 11,
  // },
  // {
  //   comment_text: "Preach!",
  //   user_id: 2,
  //   post_id: 10,
  // },
  // {
  //   comment_text: "I know thats right.",
  //   user_id: 3,
  //   post_id: 9,
  // },
  // {
  //   comment_text: "One more time for the poeple in the back.",
  //   user_id: 4,
  //   post_id: 8,
  // },
  // {
  //   comment_text: "im so jealous.",
  //   user_id: 5,
  //   post_id: 7,
  // },
  // {
  //   comment_text: "I wish i could have seen that.",
  //   user_id: 6,
  //   post_id: 6,
  // },
  // {
  //   comment_text: "Preach!",
  //   user_id: 7,
  //   post_id: 5,
  // },
  // {
  //   comment_text: "I know thats right.",
  //   user_id: 8,
  //   post_id: 4,
  // },
  // {
  //   comment_text: "One more time for the poeple in the back.",
  //   user_id: 9,
  //   post_id: 3,
  // },
  // {
  //   comment_text: "im so jealous.",
  //   user_id: 10,
  //   post_id: 2,
  // },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
