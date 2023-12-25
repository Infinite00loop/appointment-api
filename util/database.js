const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Sam@0709',{
    dialect: 'mysql',
    host: 'localhost'
});
module.exports = sequelize;