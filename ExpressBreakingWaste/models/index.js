'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/database.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// (async () => {
//     const database = require('../db');
 
//     try {
//         const resultado = await database.sync();
//         console.log(resultado);
//     } catch (error) {
//         console.log(error);
//     }

//     const resultadoCreate = await PerfilUsuario.create({
//       email: 'dengosa.pretinha@gmail.com',
//       senha: 123456,
//       razao: 'Gatinhos da Alegria',
//       cnpj: 1234567080001
//   })
//   console.log(resultadoCreate);

//     const perfil = await PerfilUsuario.findAll();
//     console.log(perfil);
  
//     const produtos = await PerfilUsuario.findByPk(1);
//     perfilUsuario.razao = "Gatinhos da Alegria";

//     const resultadoSave = await produtos.save();
//     console.log(resultadoSave);

//     const produto= await PerfilUsuario.findByPk(1);
//     perfilusuario.destroy();



// })();

//CREATE
// const resultadoCreate = await PerfilUsuario.create({
//     email: 'dengosa.pretinha@gmail.com',
//     senha: 123456,
//     razao: 'Gatinhos da Alegria',
//     cnpj: 1234567080001
// })
// console.log(resultadoCreate);

//READ
// const perfil = await PerfilUsuario.findAll();
// console.log(perfil);

// //UPDATE
// const perfilusuario = await PerfilUsuario.findByPk(1);
// //console.log(perfilusuario);
// perfilusuario.razao = "Gatinhos da Alegria";

// const resultadoSave = await perfilusuario.save();
// console.log(resultadoSave);

// //DELETE
// const perfilusuario = await PerfilUsuario.findByPk(1);
// perfilusuario.destroy();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
