"use strict";

var Contato_Controller = require('../controllers/Contato_Controller');

var contato = function contato(router) {
  router.get('/', Contato_Controller.contato);
  router.post('/', Contato_Controller.enviarMensagem);
};

module.exports = contato;