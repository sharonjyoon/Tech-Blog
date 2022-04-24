const {User} = require('../models');

const userData = [{
  username: 'Kirby',
  password: 'poyo'
},
{
  username: 'Sonic',
  password: 'sanic'
},
{
  username: 'Ebi',
  password: 'Yebi'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;