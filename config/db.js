const Sequelize = require('sequelize');
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASS, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
  });

module.exports = sequelize