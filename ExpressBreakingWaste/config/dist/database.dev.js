"use strict";

//const { DatabaseError } = require("sequelize/types");
var config = {
  "development": {
    username: 'root',
    password: '',
    database: 'breaking_waste_db',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};
module.exports = config;