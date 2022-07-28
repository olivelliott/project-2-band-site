const { Comment } = require('../models');

const commentData = [
  {
    comment_text:
      "Hey man, I'd love to meet up. I'll DM you. We could meet up at Park Bar if you want. I live in Inman Park if that's convenient for you.",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text:
      "This probably doesn't help you, but I do have one extra ticket. You can have it for free if it works out...just don't want it to go to waste. Hopefully someone else also has one!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: 'Sounds awesome, would love to meet up as well.',
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "I am! Just coming for the day, but I'll DM you.",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text:
      'Hey thanks for your support. New album is set for early 2023. Not sure about the vinyl yet...having supply chain issues. Peace. - VN',
    user_id: 4,
    post_id: 4,
  },
  {
    comment_text: 'Whoaa rare Vim sighting',
    user_id: 4,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
