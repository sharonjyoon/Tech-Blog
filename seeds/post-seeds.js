const { Post } = require('../models');

const postData = [{
  title: 'Sonic Adventure I',
  content: 'Rollin around at the speed of sound, got places to go, gotta follow my rainbow',
  user_id: 1
},
{
  title: 'Sonic Adventure II',
  content: 'Cant stick around gotta keep movin on, guess what lies ahead, only one way to find out',
  user_id: 2
},
{
  title: 'Sonic Adventure III',
  content: 'Must keep on moving ahead, no time guessing follow my plan instead',
  user_id: 3
}
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;