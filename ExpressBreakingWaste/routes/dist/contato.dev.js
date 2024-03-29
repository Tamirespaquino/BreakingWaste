"use strict";

var Contato_Controller = require('../controllers/Contato_Controller');

var contato = function contato(router) {
  router.get('/contato', Contato_Controller.contato);
  router.post('/contato', Contato_Controller.enviarMensagem);
};

module.exports = contato;