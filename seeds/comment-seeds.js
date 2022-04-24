const {Comment} = require('../models');

const commentData = [{
      comment_text: "Kirby Kirby Kirby, it's a name you should know.",
      user_id: 1,
      post_id: 1
},
{
      comment_text: "Kirby Kirby Kirby, he's the star of the show.",
      user_id: 2,
      post_id: 2
},
{
      comment_text: "He's more than you think, he's got maximum pink.",
      user_id: 3,
      post_id: 3
}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;