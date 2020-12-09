const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', 'tamirespaquino', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;
