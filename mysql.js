// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',  // Change this to the dialect you are using (e.g., 'mysql' or 'mongodb')
  username: 'root',
  password: 'root',
  database: 'product_crud',
  host: 'localhost',
});

module.exports = { sequelize };
