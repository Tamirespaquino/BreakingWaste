"use strict";

var Perfilusuario_Controller = require('../controllers/Perfilusuario_Controller');

var bodyParser = require('body-parser');

var perfil = function perfil(router) {
  router.get('/perfil', Perfilusuario_Controller.entre);
  router.get('/perfil', Perfilusuario_Controller.visualizarempresa);
  router.get('/perfil', Perfilusuario_Controller.editar);
  router.post('/perfil', Perfilusuario_Controller.alterar);
  router.put('/perfil', Perfilusuario_Controller.deletar);
  router.get('/perfil', Perfilusuario_Controller.criarnovo);
  router.get('/perfil', Perfilusuario_Controller.user);
  router.post('/perfil', Perfilusuario_Controller.user);
};

module.exports = perfil;