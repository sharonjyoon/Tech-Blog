const Sequelize = require('sequelize');
// const { rootCertificates } = require('tls');
require('dotenv').config();
let sequelize;
if(process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
}else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    username: 'root',
    password: 'rootroot',
    dialect: 'mysql',
    database: 'tech_blog',
    port: 3306
  });
}

// let sequelize = new Sequelize(process.env.JAWSDB_URL ? process.env.JAWSDB_URL : process.env.LOCALDB_URL)

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'rootroot',
//   database: 'tech_blog',
// },
//   console.log(`Connected to the tech_blog database.`)
// );


module.exports = sequelize;